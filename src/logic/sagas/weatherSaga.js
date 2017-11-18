import { call, take, put } from 'redux-saga/effects';
import axios from 'axios';

import { fetchWeather, fetchWeatherSuccess } from '../actions/weatherActions';

function callAPI() {
  return axios.get('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1').then(function(response) {
    return { data: response.data };
  }).catch(function(error) {
    return { error: error };
  });
}

export function* runFetchWeather() {
  while (true) {
    yield take([`${fetchWeather}`]);
    const { data, error } = yield call(callAPI);
    if (error != null) {
      console.error(error);
    }
    yield put(fetchWeatherSuccess(data));
  }
}
