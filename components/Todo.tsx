interface TodoProps {
  todo: Todo;
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <div
      className={`flex flex-col p-4 mb-3 w-full border-2 border-gray-300 rounded-md cursor-pointer ${
        todo.completed && 'line-through'
      } hover:bg-gray-100`}>
      <p>{todo.title}</p>
    </div>
  );
};

export default Todo;
