import React from 'react';
import Mycomponent from './MyComponent';
import Counter from './Counter';
import EventPractice from './EventPractice';
import EventPracticeFunc from './EventPracticeFunc';


const App = () => {
    return (
        <>
            <EventPractice />
            <EventPracticeFunc />
            <Mycomponent name="React" favoriteNumber={1}>리엑트</Mycomponent>
            <Counter></Counter>
        </>
    );
}

export default App;