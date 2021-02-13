import React, {useState} from 'react';
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {useUniqueId} from '../../../hooks/use-uniqueid';
import {localStorage} from '../../../hooks/use-localstorage';
import {api} from '../../../client/http-request';
import {Header} from '../../structures/header/header.component';
import {Footer} from '../../structures/footer/footer.component';
import './forecast.style.scss';

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

const Forecast = () => {
  const [like, setLike] = useState(() => Number(window.localStorage.getItem('like')) ?? 0);
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
        return 'sunny';

      case temp_c > 5 && temp_c < 20:
        return 'gloomy';

      default:
        return 'rainy';
    }
  };

  const fetchForecast = async () => {
    //save last searched city to localstorage
    if (window.localStorage.getItem('city') !== city) {
      localStorage('city', city);
    }

    if (!location.pathname.includes(`/forecast/${city}`)) {
      history.replace(`/forecast/${city}`);
    }
    setIsFetchingForecast(true);
    const response = await api().get(city);
    const data = response.data;
    setIsFetchingForecast(false);

    const {name, region, country, localtime} = data.location;
    const {temp_c, condition} = data.current;
    const {icon, text} = condition;

    //save last forecast data to localStorage
    localStorage('lastForecast', {
      country,
      condition,
      icon,
      localtime,
      name,
      region,
      temp_c,
      text,
    });

    setForecast({country, condition, icon, localtime, name, region, temp_c, text});
    setCity('');
  };

  return (
    <div className={`container forecast ${derivedBackgroundColor()}`}>
      <Header
        fragment={
          <section className="header__sec2 row" tabIndex="0">
            <input
              type="search"
              id={searchId}
              name="city"
              value={city}
              placeholder="Search city"
              aria-label="Search city weather"
              onChange={(ev) => setCity(ev.target.value)}
              onKeyPress={(ev) => {
                if (ev.key === 'Enter') {
                  fetchForecast();
                }
                return;
              }}
            />

            <button type="button" disabled={city.length >= 1 ? false : true} onClick={fetchForecast}>
              Search
            </button>
          </section>
        }
      />

      <main>
        {!cityId?.length >= 1 ? (
          <div className="landing-container">
            <img src={`${process.env.PUBLIC_URL}/assets/images/rain.svg`} alt="" className="forecast__bg" />
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

        <div
          className="apple-wrapper"
          disabled={like === 1 ? true : false}
          onClick={() => {
            if (like !== 1) {
              setLike((like) => ++like, localStorage('like', 1));
            }
          }}
        >
          <span>🍏</span>
          <p>{like === 1 ? 'Thank you 🎉' : 'Like It'}</p>
          <span>{like}</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Forecast;
