import { Map } from 'immutable';

const weatherReducer = (state = Map({
  fetching: false,
  weatherData:[]
}), action) => {
  switch (action.type) {
    case "SET_FETCHING":
      state = state.merge({fetching: action.payload});
      console.log('hi');
      break;
    case "GET_DATA_FULFILLED":
      break;
  }
  return state;
}

export default weatherReducer; 