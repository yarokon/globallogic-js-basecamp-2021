export const setTitle = title => ({
  type: 'setTitle',
  payload: title,
});

export const addTodo = title => ({
  type: 'addTodo',
  payload: {
    id: Date.now(),
    title: title.trim(),
    isCompleted: false,
  },
});

export const toggleTodo = id => ({
  type: 'toggleTodo',
  payload: id,
});

export const deleteTodo = id => ({
  type: 'deleteTodo',
  payload: id,
});
