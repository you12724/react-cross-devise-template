import { connect } from 'react-redux';

import { CHANGE_TEXT_FIELD, CREATE_TODO} from '../actions/todoActions';

const mapStateToProps = (state) => ({
  todoList: state.todo.todoList,
  text: state.todo.text
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeText: (text) => dispatch(CHANGE_TEXT_FIELD(text)),
  createTodo: (todo) => dispatch(CREATE_TODO(todo))
});

export default connect(mapStateToProps, mapDispatchToProps);
