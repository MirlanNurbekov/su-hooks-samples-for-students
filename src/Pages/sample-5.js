// Sample-5: useCallback
import React, { useState, useCallback } from 'react';

function Sample5() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount(count + 1), [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>Click to increment (useCallback)</button>
        </div>
    );
}

export default Sample5;

/*
This React component showcases the usage of the useState and useCallback hooks. useState is used to manage the state of a counter within the functional component, initializing the count to 0. useCallback wraps around the increment function that updates the state, ensuring that this function is only recreated when its dependencies, in this case, 'count', change.

The primary benefit of useCallback in this scenario is to optimize performance by avoiding unnecessary re-renders. This is especially useful when passing callbacks to deeply nested child components or optimizing components that rely heavily on reference equality to avoid unnecessary updates.

Expected behavior:
- The component initially displays "You clicked 0 times" alongside a button.
- Clicking the button triggers the increment function, which updates the count state and causes the component to re-render.
- After each click, the displayed count increments by 1, reflecting the current state. For example, clicking the button once changes the display to "You clicked 1 times", and so on.
*/