// Sample-9: useLayoutEffect
import React, { useLayoutEffect, useRef } from 'react';

function Sample9() {
    const inputRef = useRef();

    useLayoutEffect(() => {
        inputRef.current.style.backgroundColor = 'yellow';
    });

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="useLayoutEffect example" />
            <button onClick={() => (inputRef.current.value = 'Text changed!')}>Change Text (useLayoutEffect)</button>
        </div>
    );
}

export default Sample9;

/*
This React component demonstrates the use of `useLayoutEffect` to perform actions that require synchronization with the DOM updates, ensuring that changes are applied before the screen is updated. `useLayoutEffect` is particularly useful when you need to make DOM changes that should be visible to the user immediately after updates, without causing a flicker effect due to asynchronous rendering.

Expected behavior:
- The component initially displays a text input with a yellow background and a button.
- The input element's background color is set to yellow as soon as it is mounted, thanks to `useLayoutEffect`.
- Clicking the button changes the text within the input to "Text changed!", demonstrating direct DOM manipulation.
*/