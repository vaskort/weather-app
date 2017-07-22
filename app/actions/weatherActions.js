import axios from 'axios';

export function getData(city) {

  const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=b12b50103893779b9ed06c4e9346cec9&units=metric';
  let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${city},GB`;

  return {
    type: "GET_DATA",
    payload: axios.get(requestURL)
  };
}

export function setFetching(payload) {
  return {
    type: "SET_FETCHING",
    payload: payload
  };
}