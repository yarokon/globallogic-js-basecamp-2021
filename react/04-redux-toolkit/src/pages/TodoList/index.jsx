import { useDispatch, useSelector } from 'react-redux';

import { setTitle, addTodo, toggleTodo, deleteTodo } from '../../features/todos';
import './styles.scss';

function TodoList() {
  const dispatch = useDispatch();
  const { title, todoList } = useSelector(state => state.todos);

  const handleSubmit = e => {
    e.preventDefault();

    if (title.trim()) {
      dispatch(addTodo(title));
    }
  };

  const handleDelete = id => e => {
    e.stopPropagation();

    dispatch(deleteTodo(id));
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

            <button type="button" onClick={handleDelete(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
