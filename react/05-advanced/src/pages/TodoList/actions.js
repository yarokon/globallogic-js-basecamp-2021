export const SET_TITLE = 'setTitle';
export const ADD_TODO = 'addTodo';
export const TOGGLE_TODO = 'toggleTodo';
export const DELETE_TODO = 'deleteTodo';

export const setTitle = title => ({
  type: SET_TITLE,
  payload: title,
});

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    title: title.trim(),
    isCompleted: false,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});
