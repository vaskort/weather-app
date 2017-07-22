import { Map } from 'immutable';

const weatherReducer = (state = Map({
  weatherData:[]
}), action) => {
  switch (action.type) {
    case "GET_DATA":
      break;
  }
  return state;
}

export default weatherReducer; 