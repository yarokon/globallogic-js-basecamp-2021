import { createContext, useReducer } from 'react';

import reducer from './reducer';

const initialState = {
  title: '',
  todoList: [],
};

export const TodoListContext = createContext(null);

function TodoListProvider({ children }) {
  const value = useReducer(reducer, initialState);

  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>;
}

export default TodoListProvider;
