import { TodoList } from 'components';

interface indexProps {}

const index = ({}: indexProps) => {
  return (
    <div className='flex flex-col h-screen max-w-screen-xl mx-auto'>
      <main className='flex-grow p-4'>
        <TodoList />
      </main>
    </div>
  );
};

export default index;
