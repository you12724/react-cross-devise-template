import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../../connects/RootConnect';

import TextFormComponent from '../../components/molecules/TextFormComponent/TextFormComponent';
import Button from '../../components/atoms/Button/Button';
import TodoList from '../../components/molecules/TodoList/TodoList';

const Root = ({todoList, text, handleChangeText, createTodo}) => (
  <div>
    <TextFormComponent handleChange={handleChangeText} value={text}>タイトル</TextFormComponent>
    <Button handleClick={createTodo}>作成</Button>
    <TodoList todoList={todoList} />
  </div>
);

Root.propTypes = {
  todoList: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired
};

export default connect(Root);
