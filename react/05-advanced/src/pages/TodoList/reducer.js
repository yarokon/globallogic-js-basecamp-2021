import { SET_TITLE, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actions';

export const initialState = {
  title: '',
  todoList: [],
};

const reducer = (state, action) => {
  const { todoList } = state;
  const { type, payload } = action;

  switch (type) {
    case SET_TITLE: {
      return {
        ...state,
        title: payload,
      };
    }
    case ADD_TODO: {
      return {
        title: '',
        todoList: [...todoList, payload],
      };
    }
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: todoList.map(todo =>
          todo.id === payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: todoList.filter(todo => todo.id !== payload),
      };
    default:
      throw new Error(`Type "${type}" is not defined`);
  }
};

export default reducer;
