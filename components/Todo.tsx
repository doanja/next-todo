import { GiCancel } from 'react-icons/gi';

interface TodoProps {
  todo: Todo;
  deleteTodo: DeleteTodo;
  toggleCompleted: ToggleCompleted;
}

const Todo = ({ todo, deleteTodo, toggleCompleted }: TodoProps) => {
  return (
    <div
      className={`flex flex-col p-4 mb-3 w-full rounded-md cursor-pointer bg-gray-100 md:w-1/2 ${
        todo.completed && 'line-through'
      } hover:bg-gray-200`}>
      <div className='flex flex-row justify-between'>
        <p onClick={() => toggleCompleted(todo.id)}>{todo.title}</p>

        <GiCancel className='text-black z-10 hover:text-red-500' size='1rem' onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
