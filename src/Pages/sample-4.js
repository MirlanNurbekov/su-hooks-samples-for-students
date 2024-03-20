// Sample-4: useReducer
import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Sample4() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}

export default Sample4;



/*
This React component demonstrates the use of the useReducer hook for state management. The useReducer hook is particularly useful for handling complex state logic that involves multiple sub-values or when the next state depends on the previous one. It allows for more predictable state transitions using the reducer pattern, which is familiar to Redux users.

The reducer function defined takes the current state and an action object, and returns a new state based on the action type. In this example, the actions are 'increment' and 'decrement', adjusting the 'count' value in the state accordingly.

The Sample4 component initializes its state using useReducer, with an initial state of {count: 0}. It renders the current count and provides two buttons to dispatch 'increment' and 'decrement' actions. Clicking these buttons updates the state based on the reducer function, demonstrating a straightforward way to manage state updates in response to user actions.

Expected behavior:
- The component renders the initial count (0) and two buttons labeled '-' and '+'.
- Clicking the '-' button decrements the count, while clicking the '+' button increments the count.
- The displayed count updates in response to button clicks, showcasing dynamic state management within a functional component using useReducer.
*/
