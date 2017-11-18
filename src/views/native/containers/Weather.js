import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';

import connect from '../../../logic/connects/WeatherConnect';

class Weather extends Component {

  componentWillMount() {
    this.props.fetchWeather();
  }

  render() {
    const { name, weathers } = this.props;
    return (
      <View>
        <Text>天気予報です。</Text>
        <Text>{name}</Text>
        <FlatList
          data={weathers}
          renderItem={({item}) => <Text>{item.description}</Text>} />
      </View>
    );
  }
}

Weather.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
  name: PropTypes.string,
  weathers: PropTypes.array
};

Weather.defaultProps = {
  name: '読み込み中です...'
};

export default connect(Weather);
