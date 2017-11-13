import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import TextField from '../atoms/TextField';

const styles = StyleSheet.create({
  container: {
    margin: 24
  }
});

const TextFormComponent = ({children, value, handleChangeText}) => (
  <View style={styles.container}>
    <Text>{children}</Text>
    <TextField handleChangeText={handleChangeText} value={value} />
  </View>
);

TextFormComponent.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChangeText: PropTypes.func.isRequired
};

export default TextFormComponent;
