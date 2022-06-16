import { useEffect, useReducer, createContext, useContext } from 'react';

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

type Action =
  | {
      type: 'ADD_TODO';
      payload: ITodo;
    }
  | {
      type: 'DELETE_TODO';
      payload: string;
    }
  | {
      type: 'TOGGLE_COMPLETED';
      payload: string;
    }
  | {
      type: 'CLEAR_COMPLETED';
    }
  | {
      type: 'SET_TODO_ORDER';
      payload: ITodo[];
    }
type TodoContext = {
  dispatch: React.Dispatch<Action>;
  todos: ITodo[];
};

function init() {
  return JSON.parse(localStorage.getItem('todos') || '[]');
}

function reducer(todos: ITodo[], action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, action.payload];
    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE_COMPLETED':
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'CLEAR_COMPLETED':
      return todos.filter((todo) => todo.completed === false);
    case 'SET_TODO_ORDER':
      return (todos = action.payload);
    default:
      return todos;
  }
}

const TodoContext = createContext<TodoContext>({} as TodoContext);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(reducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
