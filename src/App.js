import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./compoents/TodoTemplate";
import TodoHead from "./compoents/TodoHead";
import TodoList from "./compoents/TodoList";
import TodoCreate from './compoents/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </>
    );
}

export default App;