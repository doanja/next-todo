import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { Todo, TodoForm } from 'components';

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

  const addTodo = (todoText: string) => {
    const newTodo = {
      id: v4(),
      title: todoText,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (todoId: string) => {
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const toggleCompleted = (todoId: string) => {
    const completedTodos = todos.map((todo: Todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(completedTodos);
  };

  return (
    <div className='flex flex-col items-center'>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo: Todo) => (
        <Todo todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
};

export default TodoList;
