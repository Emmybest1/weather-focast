import axios from 'axios';

export const application__api = () => ({
  async get(city = 'tallinn') {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_WEATHERAPI_BASEURL}/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_API_KEY}&q=${city}`
      );

      if (response?.status === 200) {
        return Promise.resolve(response);
      } else {
        console.group('API SERVER ERROR❌📦');
        console.error(response);
        console.groupEnd();
        return Promise.resolve(response);
      }
    } catch (error) {
      console.group('API CLIENT ERROR❌📡');
      console.error(error);
      console.groupEnd();

      return error;
    }
  },
});
