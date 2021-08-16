import { useEffect, useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
      const data = await res.json();

      setTodos(data);
    };

    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo: Todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
