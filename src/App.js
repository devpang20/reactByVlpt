import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'text1',
            checked: true,
        },
        {
            id: 2,
            text: 'text2',
            checked: true,
        },
        {
            id: 3,
            text: 'text3',
            checked: true,
        },
        {
            id: 4,
            text: 'text4',
            checked: false,
        }

    ]);

    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
}

export default App;