import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Mycomponent from './MyComponent';
import Counter from './Counter';
import EventPractice from './EventPractice';

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: #e9ecef;
//   }
// `;

const App = () => {
    return (
        <>
            {/* <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate> */}
            <EventPractice />
            <Mycomponent name="React" favoriteNumber={1}>리엑트</Mycomponent>
            <Counter></Counter>
        </>
    );
}

export default App;