import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useUniqueId} from '../../hooks/use-uniqueid';
import {application__api} from '../../client/client-request';
import './home.style.scss';

const baseCity = 'paris';
const initialCityWeatherProps = {
  name: '',
  region: '',
  country: '',
  localtime: '',
  temp_c: null,
  temp_f: null,
  icon: '',
};
const Home = () => {
  const [city, setCity] = useState(baseCity);
  const [cityWeather /*setCityWeather*/] = useState(initialCityWeatherProps);
  const [searchId] = useUniqueId(1);
  const history = useHistory();
  const {cityId} = useParams();

  const {region, country, localtime, temp_c, icon} = cityWeather;

  console.log(process.env);
  /*
   * @fetch city weather detail
   */
  useEffect(() => {
    const response = application__api().get(city);

    console.log(response);
    return () => {
      setCity(initialCityWeatherProps);
    };
  }, [city]);
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
    <div className="container home" style={{backgroundColor: derivedBackgroundColor}}>
      <header className="header">
        <section className="header__sec1 row">
          <i className="fa fa-map-marker-alt"></i>
          <h4>⛈️ App</h4>
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
            onClick={() => {
              history.push(`/weather/${city}`);
              setCity(baseCity);
            }}
            disabled={city.length >= 1 ? false : true}
          >
            Search
          </button>
        </section>
      </header>

      <main>
        {!cityId?.length >= 1 ? (
          <img src={`${process.env.PUBLIC_URL}/assets/images/rain.svg`} alt="" className="home__bg" />
        ) : (
          <>
            <h3>{`${region} of ${country}`} </h3>
            <div>
              <span>
                <p>The weather is {temp_c} °C</p>
                <img src={icon} alt="" />
              </span>
              <time>{localtime}</time>
            </div>
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
