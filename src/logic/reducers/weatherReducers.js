import { handleActions } from 'redux-actions';

import { FETCH_WEATHER_SUCCESS, FETCH_WEATHER } from '../actions/weatherActions';

export default handleActions({
  [FETCH_WEATHER_SUCCESS]: (state, action) => ({
    ...state,
    name: action.payload.name,
    weathers: action.payload.weather
  })
}, {weather: ''});
