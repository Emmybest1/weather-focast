import axios from 'axios';

export const application__api = () => ({
  async get(city = 'tallinn') {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_WEATHERAPI_BASEUR}/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_API_KEY}&q=${city}`.toLocaleLowerCase()
      );

      if (response?.status === 200) {
        return response;
      } else {
        console.group('API SERVER ERROR❌📦');
        console.error(response);
        console.groupEnd();
      }
    } catch (error) {
      console.group('API CLIENT ERROR❌📡');
      console.error(error);
      console.groupEnd();
    }
  },
});
