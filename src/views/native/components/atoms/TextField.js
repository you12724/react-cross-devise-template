import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

const TextField = ({value, handleChangeText}) => (
  <View>
    <TextInput
      style={styles.textField}
      value={value}
      onChangeText={text => handleChangeText(text)}/>
  </View>
);

TextField.propTypes = {
  value: PropTypes.string,
  handleChangeText: PropTypes.func.isRequired
};

export default TextField;
