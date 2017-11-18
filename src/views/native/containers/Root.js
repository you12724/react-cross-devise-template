import React from 'react';
import { View, StyleSheet, Button, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import connect from '../../../logic/connects/RootConnect';

const styles = StyleSheet.create({
  container: {
    marginTop: 38
  }
});

const Root = () => (
  <View style={styles.container}>
    <Button
      onPress={() => Actions.weather()}
      title="天気予報へ遷移"
      color="blue" />
  </View>
);

Root.propTypes = {
};

export default connect(Root);
