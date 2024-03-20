// Sample-10: useDebugValue
import React, { useDebugValue, useState } from 'react';

function useCustomHook() {
    const [value, setValue] = useState("Initial value");
    useDebugValue(value ? "Value exists" : "No value");

    return [value, setValue];
}

function Sample10() {
    const [value, setValue] = useCustomHook();

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue("New value")}>Change Value (useDebugValue)</button>
        </div>
    );
}

export default Sample10;

/*
This React component demonstrates the use of `useDebugValue` within a custom hook (`useCustomHook`) to provide a meaningful debug value in React DevTools. The custom hook manages a piece of state (`value`) and exposes this state along with a setter function (`setValue`) to the component. `useDebugValue` is particularly useful for adding context in development tools, making it easier to debug components that use custom hooks by showing meaningful labels or statuses of hook internal states.

Expected behavior:
- The component initially displays "Initial value" and a button.
- Clicking the button changes the displayed text to "New value", showcasing dynamic state management through a custom hook.
- When inspected in React DevTools, the custom hook displays a debug value indicating whether "Value exists" or "No value", providing insight into the hook's current state for debugging purposes.
*/