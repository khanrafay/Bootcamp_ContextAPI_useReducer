import React, { useContext, useReducer } from 'react';
import counterContext from './CounterContext';
import numberReducer from './numberReducer';

export function Child2() {

    const [count, setCount] = useContext(counterContext)
    const [state, dispatch] = useReducer(numberReducer, 0);

    return (
        <div>
            <h1>Hi i am child 2</h1>
            <h2>The number is {state}</h2>
            <button onClick={() => {dispatch({type:'INCREMENT'})}}>Increase</button>
            <button onClick={() => {dispatch({type:'DECREMENT'})}}>Decrease</button>
        </div>
    )
}
