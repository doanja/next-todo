type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type AddTodo = (todoText: string) => void;
type DeleteTodo = (todoId: string) => void;
type ToggleCompleted = (todoId: string) => void;
