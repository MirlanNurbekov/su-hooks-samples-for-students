// Sample-7: useRef
import React, { useRef } from 'react';

function Sample7() {
    const inputEl = useRef(null);
    const focusInput = () => inputEl.current.focus();

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={focusInput}>Focus the input (useRef)</button>
        </div>
    );
}

export default Sample7;

/*
This React component demonstrates the usage of the useRef hook. useRef is utilized to create a reference (`ref`) to a DOM element, enabling direct DOM manipulation. This approach is useful for managing focus, reading values, or triggering animations directly on DOM elements without additional re-rendering.

The primary benefit of useRef in this scenario is providing a way to imperatively access a DOM element, in this case, to set focus on an input field. This is particularly useful for tasks that require direct interaction with the DOM and cannot be achieved through React's declarative state updates.

Expected behavior:
- The component initially displays an unfocused text input alongside a button.
- Clicking the button triggers the `focusInput` function, which uses the `inputEl` ref to focus the text input field, allowing for immediate text entry.
*/