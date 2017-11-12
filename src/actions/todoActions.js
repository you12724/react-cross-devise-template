import { createAction } from 'redux-actions';

const BASE_ACTION_NAME = 'todo';

export const CHANGE_TEXT_FIELD = createAction(`${BASE_ACTION_NAME}/text/change`);
export const CREATE_TODO = createAction(`${BASE_ACTION_NAME}/create`);
export const CREATE_TODO_SUCCESS = createAction(`${BASE_ACTION_NAME}/create/success`);
