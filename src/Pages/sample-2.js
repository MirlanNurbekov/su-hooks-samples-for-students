// Sample-2: useEffect
import React, { useState, useEffect } from 'react';

function Sample2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click to increment (useEffect)</button>
        </div>
    );
}


export default Sample2;


/*
This React component demonstrates the use of both useState and useEffect hooks. The useState hook initializes 'count' with a value of 0 and provides a 'setCount' function to update this state. When the state changes, the component re-renders.

The useEffect hook is used here for a side effect: updating the document's title whenever the 'count' state changes. This hook runs after every render of the component, including the initial render, making the document's title dynamic and responsive to user interactions.

Expected output upon interacting with the component:
- On initial render, the document's title is set to "You clicked 0 times", matching the initial state.
- The page displays a paragraph indicating how many times the button has been clicked, starting with "You clicked 0 times".
- Each time the button is clicked, 'setCount' is invoked to increase 'count' by 1. This causes a re-render, during which the useEffect hook updates the document's title to reflect the new count ("You clicked 1 times", "You clicked 2 times", etc.).
- As a result, both the displayed paragraph and the document's title update in sync with each button click.
*/
