import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import promise from 'redux-promise-middleware';

import weatherData from "./reducers/weatherReducer";

export default createStore(
      combineReducers({
        weatherData
      }), 
      {}, 
      applyMiddleware(createLogger(), promise())
);