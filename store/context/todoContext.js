import { createContext, useState } from 'react';

export const TodoContext = createContext({
  todoList: [],
  addItem: () => {},
  removeItem: () => {},
  changeStatus: () => {},
});

const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Städa', description: 'Städa hallen', done: false },
    { id: 2, title: 'Diska', description: 'Diska allt i köket', done: true },
  ]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addItem = () => {
    setTodoList((current) => [
      ...current,
      { id: todoList.length + 1, title, description, done: false },
    ]);
    setTitle('');
    setDescription('');
  };

  const removeItem = (id) => {
    setTodoList((current) => current.filter((item) => id !== item.id));
  };

  const changeStatus = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        title,
        description,
        setTitle,
        setDescription,
        addItem,
        removeItem,
        changeStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
