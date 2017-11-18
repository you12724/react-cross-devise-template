import { createAction } from 'redux-actions';

const BASE_ACTION = 'weather';
export const FETCH_WEATHER = `${BASE_ACTION}/fetch`;
export const FETCH_WEATHER_SUCCESS = `${BASE_ACTION}/fetch/success`;

export const fetchWeather = createAction(FETCH_WEATHER);
export const fetchWeatherSuccess = createAction(FETCH_WEATHER_SUCCESS);
