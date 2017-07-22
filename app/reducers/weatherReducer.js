import { Map } from 'immutable';

const weatherReducer = (state = Map({
  fetching: false,
  // error property will help us show the error message
  error: false,
  weatherData:[]
}), action) => {
  switch (action.type) {
    case "SET_FETCHING":
      state = state.merge({fetching: action.payload});
      break;
    // the two actions below are create with the redux-promise-middleware
    case "GET_DATA_FULFILLED":
      state = state.merge({fetching: false, error: false, weatherData: action.payload.data});
      break;
    case "GET_DATA_REJECTED":
      state = state.merge({error: true});
  }
  return state;
}

export default weatherReducer; 