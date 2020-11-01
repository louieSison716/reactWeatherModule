// need to install redux-promise (a middleware package)
// to hanlde redux AJAX request

// library to handle AJAX request
import axios from 'axios';

const API_KEY = 'e8163ebb4ac67b954a16fd09e2d740f1';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},nz`;
  // action to call the api
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
