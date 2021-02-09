import React, {useState} from 'react';
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {useUniqueId} from '../../hooks/use-uniqueid';
import {application__api} from '../../client/client-request';
import './home.style.scss';

const initialForecastState = () =>
  window.localStorage.getItem('lastForecast')
    ? JSON.parse(window.localStorage.getItem('lastForecast'))
    : {
        name: '',
        region: '',
        country: '',
        localtime: '',
        temp_c: null,
        text: '',
        icon: '',
      };

const Home = () => {
  const [city, setCity] = useState(() => window.localStorage.getItem('city') ?? '');
  const [forecast, setForecast] = useState(() => initialForecastState());
  const [isFetchingForecast, setIsFetchingForecast] = useState(false);
  const [searchId] = useUniqueId(1);
  const location = useLocation();
  const history = useHistory();
  const {cityId} = useParams();
  const {country, icon, localtime, region, temp_c, text} = forecast;

  const derivedBackgroundColor = () => {
    switch (true) {
      case temp_c >= 20:
        return '#fbd97d';

      case temp_c > 5 && temp_c < 20:
        return '#2e3341';

      default:
        return '#6ff7e7';
    }
  };

  return (
    <div className="container home" style={{backgroundColor: derivedBackgroundColor()}}>
      <header className="header">
        <section className="header__sec1 row">
          <i className="fa fa-map-marker-alt"></i>
          <h4>⛈️ App</h4>
          {location.pathname.includes('/weather') && (
            <i className="fa fa-home button" onClick={() => history.push('/')}></i>
          )}
        </section>

        <section className="header__sec2 row" tabIndex="0">
          <input
            type="search"
            id={searchId}
            name="city"
            value={city}
            placeholder="Search city"
            aria-label="Search city weather"
            onChange={(ev) => setCity(ev.target.value)}
          />

          <button
            type="button"
            disabled={city.length >= 1 ? false : true}
            onClick={async () => {
              //save city to localstorage
              if (window.localStorage.getItem('city') !== city) {
                window.localStorage.setItem('city', city);
              }

              history.replace(`/weather/${city}`);
              setIsFetchingForecast(true);
              const response = await application__api().get(city);
              const data = response.data;
              setIsFetchingForecast(false);

              const {name, region, country, localtime} = data.location;
              const {temp_c, condition} = data.current;
              const {icon, text} = condition;

              //save forecast data to localStorage
              window.localStorage.setItem(
                'lastForecast',
                JSON.stringify({country, condition, icon, localtime, name, region, temp_c, text})
              );
              setForecast({country, condition, icon, localtime, name, region, temp_c, text});
            }}
          >
            Search
          </button>
        </section>
      </header>

      <main>
        {!cityId?.length >= 1 ? (
          <div className="landing-container">
            <img src={`${process.env.PUBLIC_URL}/assets/images/rain.svg`} alt="" className="home__bg" />
          </div>
        ) : (
          <>
            {isFetchingForecast && <span>Loading...</span>}
            {temp_c && (
              <div className="weather-container">
                <h3>{`${region} ${country}`} </h3>
                <div>
                  <span>
                    {temp_c && <p>The weather is {temp_c} °C</p>}
                    <img src={icon} alt="" />
                  </span>
                  <p>{text}</p>
                  <time>{localtime}</time>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer>
        Made with ❤️ by AfricLite <time>{new Date().getFullYear()}</time>
      </footer>
    </div>
  );
};

export default Home;
