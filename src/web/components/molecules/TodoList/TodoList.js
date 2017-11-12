import React from 'react';
import PropTypes from 'prop-types';

import TodoCell from '../../atoms/TodoCell/TodoCell';

const TodoList = ({todoList}) => (
  <div>
    { todoList.map( todo => <TodoCell key={todo}>{todo}</TodoCell> ) }
  </div>
);

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired
};

export default TodoList;
