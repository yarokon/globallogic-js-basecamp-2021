import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  todoList: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    addTodo: {
      reducer(state, action) {
        state.title = '';
        state.todoList.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title: title.trim(),
            isCompleted: false,
          },
        };
      },
    },
    toggleTodo(state, action) {
      state.todoList = state.todoList.map(todo =>
        todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    },
    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { setTitle, addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const { reducer } = todosSlice;
