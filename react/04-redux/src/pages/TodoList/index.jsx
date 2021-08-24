import { useContext } from 'react';

import { TodoListContext } from './TodoListProvider';
import { setTitle, addTodo, toggleTodo, deleteTodo } from './actions';
import './styles.scss';

function TodoList() {
  const [state, dispatch] = useContext(TodoListContext);
  const { title, todoList } = state;

  const handleSubmit = e => {
    e.preventDefault();

    if (title.trim()) {
      dispatch(addTodo(title));
    }
  };

  return (
    <div className="TodoList">
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => dispatch(setTitle(e.target.value))} />
      </form>

      <ul>
        {todoList.map(({ id, title, isCompleted }) => (
          <li key={id} onClick={() => dispatch(toggleTodo(id))}>
            <span style={{ textDecoration: isCompleted ? 'line-through' : 'auto' }}>{title}</span>
            <button type="button" onClick={() => dispatch(deleteTodo(id))}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
