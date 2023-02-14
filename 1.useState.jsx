import React from 'react'
import { useState } from 'react'


/* SIMPLE USE-STATE
function StateFunction() {
    const [count, setCount] = useState(0)
    const incrementCount = function () { setCount(count + 1) }     ---> defining a function called incrementCount that 
                                                uses the setCount function to update the value of the count state by incrementing it by 1. 
                                                This function can be used to update the state value of count in a React component.
    return (
        <div>
            <button onClick={incrementCount}> Increment {count} </button>
        </div>
    )}
*/


// UPDATE STATE USING PREV-STATE
function StateFunction() {
    const initialState = 0
    const [count, setCount] = useState(initialState) /*The useState hook in React returns an array with two elements: 
    the current state value, and a function to update that value. You can use array destructuring to assign these values to variables
    In this example, count is the current state value (initialized to 0), and setCount is the function to update that value. 
    You can call setCount with a new value to update the state, and React will re-render the component with the 

    return (

        /*
        <div>
                <h1> {count} </h1>
                <button onClick={() => {setCount(count + 1)}}>Increment </button>
                <button onClick={() => {setCount(initialState)}}>Reset</button>
                <button onClick={() => {setCount(count - 1)}}>Decrement</button>
                <button onClick={() => {setCount(count + 5)}}>Increment 5 </button>
        </div> 
        UNSAFE
            Note:  In React, when you need to update the state based on its previous value, 
            it is recommended to use the prevState argument that is provided by the setState function (or the update function returned by the useState hook). 
            This is because state updates in React are asynchronous and can be batched for performance reasons. 
            Therefore, if you update the state by directly referencing the current state value, 
            you may not get the expected results if multiple state updates are batched together.*/



        /*SAFE
        Using prevState ensures that you always have access to the latest state value, 
            regardless of how many state updates are queued or when they are actually applied. 
            By using prevState, you can also ensure that your component behaves predictably, regardless of whether or not React batches state updates.*/
        < div >
            <h1> {count} </h1>
            <button onClick={() => { setCount(prevCount => (count + 1)) }}>Increment </button>
            <button onClick={() => { setCount(initialState) }}>Reset</button>
            <button onClick={() => { setCount(prevCount => (count - 1)) }}>Increment </button>
            <button onClick={() => { setCount(prevCount => (count + 5)) }}>Increment </button>

        </div >
    )
}

export default StateFunction
