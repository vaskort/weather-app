import { Map } from 'immutable';

const weatherReducer = (state = Map({
  fetching: false,
  error: false,
  weatherData:[]
}), action) => {
  switch (action.type) {
    case "SET_FETCHING":
      state = state.merge({fetching: action.payload});
      break;
    case "GET_DATA_FULFILLED":
      state = state.merge({fetching: false, error: false, weatherData: action.payload.data});
      break;
    case "GET_DATA_REJECTED":
      state = state.merge({error: true});
  }
  return state;
}

export default weatherReducer; 