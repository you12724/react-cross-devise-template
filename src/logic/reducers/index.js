import { combineReducers } from 'redux';

import todo from './todoReducers';
import weather from './weatherReducers';

const rootReducer = combineReducers({
  todo,
  weather
});

export default rootReducer;
