import React from 'react';
import TodoTemplate from './components/TodoTemplate.js'
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';

const App = () => {
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList />
        </TodoTemplate>
    );
}

export default App;