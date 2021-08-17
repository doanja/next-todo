import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [textInput, setTextInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setTextInput(e.target.value);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    addTodo(textInput);
    setTextInput('');
  };

  return (
    <form className='container flex justify-center items-center mb-3' onSubmit={handleSubmit}>
      <div className='relative'>
        <div className='absolute top-4 left-3'>
          <RiSearchLine className='text-black z-10 hover:text-gray-500' size='1.5rem' />
        </div>
        <input
          type='text'
          className='h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
          placeholder='Enter a todo...'
          value={textInput}
          onChange={handleChange}
        />
        <div className='absolute top-2 right-2'>
          <button className='h-10 w-20 text-white rounded-lg bg-green-500 hover:bg-green-600'>Add Todo</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
