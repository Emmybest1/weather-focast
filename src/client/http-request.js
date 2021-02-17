import axios from 'axios';
import {apiConsolePrinter} from '../utils/api-console-print';

export const api = () => ({
  async get(city = 'tallinn') {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_WEATHERAPI_BASEURL}/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_API_KEY}&q=${city}`
      );

      if (response?.status === 200) {
        return Promise.resolve(response);
      } else {
        apiConsolePrinter(0, response);
      }
    } catch (error) {
      apiConsolePrinter(0, error);
      return error;
    }
  },
});
