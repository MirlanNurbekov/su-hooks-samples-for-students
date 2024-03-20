// Sample-3: useContext
import React, { useContext } from 'react';

const MyContext = React.createContext();

function Sample3() {
    return (
        <MyContext.Provider value="Hello from Context!">
            <ChildComponent />
        </MyContext.Provider>
    );
}

function ChildComponent() {
    const value = useContext(MyContext);
    return <div>{value}</div>;
}

export default Sample3;

/*
This React component demonstrates the use of the useContext hook to consume a context within a functional component. The MyContext object is created using React.createContext(), which is intended to hold data that might be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

In the Sample3 component, MyContext.Provider wraps the ChildComponent, providing it with the context value "Hello from Context!". This value is accessible to all components within the provider's children, eliminating the need to pass props through intermediate elements.

The ChildComponent uses the useContext hook to access MyContext's value. By passing MyContext to useContext, it can directly consume the context value provided by the nearest enclosing provider, in this case, "Hello from Context!".

Expected behavior:
- The Sample3 component renders the ChildComponent.
- The ChildComponent accesses the value provided by MyContext.Provider via useContext.
- The rendered output will display "Hello from Context!" inside a div, demonstrating the successful passing and consumption of context in a React component tree.
*/