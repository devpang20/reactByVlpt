import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./compoents/TodoTemplate";
import TodoHead from "./compoents/TodoHead";

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
            </TodoTemplate>
        </>
    );
}

export default App;