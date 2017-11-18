import { fork } from 'redux-saga/effects';
import * as weather from './weatherSaga';

export default function* rootSaga() {
  yield fork(weather.runFetchWeather);
}
