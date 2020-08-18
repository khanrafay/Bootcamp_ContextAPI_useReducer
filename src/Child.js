import React, { useContext } from 'react';
import counterContext from './CounterContext';

export function Child() {

    const [count, setCount] = useContext(counterContext)

    return (
        <div>
            <h1>Hi i am child</h1>
            <h2>The number is {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
