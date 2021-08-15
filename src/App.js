import React, { useState, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '숨쉬기',
      checked: true,
    },
    {
      id: 2,
      text: '밥먹기',
      checked: true,
    },
    {
      id: 3,
      text: '달리기',
      checked: false,
    },
  ]);

  const nextId = useRef(3);

  const onInsert = (text) => {
    setTodos(
      todos.concat([
        {
          id: nextId.current + 1,
          text,
          checked: false,
        },
      ]),
    );
    nextId.current++;
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </TodoTemplate>
  );
};

export default App;
