import React from 'react';
import Mycomponent from './MyComponent';
import Counter from './Counter';
import EventPractice from './EventPractice';


const App = () => {
    return (
        <>
            <EventPractice />
            <Mycomponent name="React" favoriteNumber={1}>리엑트</Mycomponent>
            <Counter></Counter>
        </>
    );
}

export default App;