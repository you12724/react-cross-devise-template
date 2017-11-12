import { handleActions } from 'redux-actions';

import { CHANGE_TEXT_FIELD, CREATE_TODO } from '../actions/todoActions';

const initialState = {
  todoList: [],
  text: ''
};

export default handleActions({
  [CHANGE_TEXT_FIELD]: (state, action) => ({
    ...state,
    text: action.payload
  }),

  [CREATE_TODO]: (state, action) => ({
    text: '',
    todoList: state.todoList.concat([state.text])
  })
}, initialState);
