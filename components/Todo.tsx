interface TodoProps {
  todo: Todo;
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <div
      className={`flex flex-col p-4 mb-3 w-full rounded-md cursor-pointer bg-gray-100 md:w-1/2 ${
        todo.completed && 'line-through'
      } hover:bg-gray-200`}>
      <p>{todo.title}</p>
    </div>
  );
};

export default Todo;
