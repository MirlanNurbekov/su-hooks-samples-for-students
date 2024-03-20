// Sample-8: useImperativeHandle
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} type="text" />;
});

function Sample8() {
    const fancyInputRef = useRef();
    return (
        <div>
            <FancyInput ref={fancyInputRef} />
            <button onClick={() => fancyInputRef.current.focus()}>Focus the input (useImperativeHandle)</button>
        </div>
    );
}

export default Sample8;


/*
This React component showcases the use of `useRef`, `forwardRef`, and `useImperativeHandle` hooks to expose a child component's imperative methods (like focusing an input element) to a parent component.

`useImperativeHandle` in conjunction with `forwardRef` allows child components to expose specific methods to parent components. This pattern is useful for encapsulating and controlling interactions with DOM elements or component instances, enabling a more imperative approach to managing focus, selections, or animations.

Expected behavior:
- The component initially displays an unfocused text input alongside a button.
- Clicking the button triggers the exposed `focus` method of `FancyInput` through `fancyInputRef`, focusing the text input field for immediate text entry.
*/