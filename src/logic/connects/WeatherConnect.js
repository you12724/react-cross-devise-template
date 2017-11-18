import { connect } from 'react-redux';

import { fetchWeather } from '../actions/weatherActions';

const mapStateToProps = (state) => ({
  name: state.weather.name,
  weathers: state.weather.weathers
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: () => dispatch(fetchWeather())
});

export default connect(mapStateToProps, mapDispatchToProps);
