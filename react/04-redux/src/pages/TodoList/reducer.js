const reducer = (state, action) => {
  const { todoList } = state;
  const { type, payload } = action;

  switch (type) {
    case 'setTitle': {
      return {
        ...state,
        title: payload,
      };
    }
    case 'addTodo': {
      return {
        title: '',
        todoList: [...todoList, payload],
      };
    }
    case 'toggleTodo':
      return {
        ...state,
        todoList: todoList.map(todo =>
          todo.id === payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      };
    case 'deleteTodo':
      return {
        ...state,
        todoList: todoList.filter(todo => todo.id !== payload),
      };
    default:
      throw new Error(`Type "${type}" is not defined`);
  }
};

export default reducer;
