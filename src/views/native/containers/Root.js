import React from 'react';
import { View, StyleSheet, Button, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import connect from '../../../logic/connects/RootConnect';
import TextFormComponent from '../components/molecules/TextFormComponent';

const styles = StyleSheet.create({
  container: {
    marginTop: 38
  }
});

const Root = ({createTodo, handleChangeText, text, todoList}) => (
  <View style={styles.container}>
    <TextFormComponent handleChangeText={handleChangeText} value={text}>
      タイトル
    </TextFormComponent>
    <Button
      onPress={createTodo}
      title="作成"
      color="blue" />
    <FlatList
      data={todoList}
      renderItem={({item}) => <Text>{item}</Text>}/>
  </View>
);

Root.propTypes = {
  createTodo: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  todoList: PropTypes.array.isRequired
};

export default connect(Root);
