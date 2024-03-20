// Sample-6: useMemo
import React, { useState, useMemo } from 'react';

function Sample6() {
    const [count, setCount] = useState(0);
    const doubleCount = useMemo(() => count * 2, [count]);

    return (
        <div>
            <p>{count} doubled is {doubleCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment (useMemo)</button>
        </div>
    );
}

export default Sample6;

/*
This React component illustrates the use of the useState and useMemo hooks. useState manages the state of a counter, while useMemo is used to memoize the doubled value of the counter, recalculating it only when the count changes.

The primary advantage of useMemo in this case is to optimize performance by avoiding recalculating the doubled value on every render, particularly useful for expensive calculations or operations.

Expected behavior:
- The component initially displays "0 doubled is 0" alongside a button.
- Clicking the button increments the count state and triggers a re-render.
- The displayed text updates to reflect the new count and its doubled value. For instance, after one click, it changes to "1 doubled is 2", and so on.
*/