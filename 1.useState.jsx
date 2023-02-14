import React from 'react'
import { useState } from 'react'

// SIMPLE USE-STATE
// function StateFunction() {
//     const [count, setCount] = useState(0)
//     const incrementCount = function () { setCount(count + 1) }
//     return (
//         <div>
//             <button onClick={incrementCount}> Increment {count} </button>
//         </div>
//     )}


// UPDATE STATE USING PREV-STATE
function StateFunction() {
    const initialState = 0
    const [count, setCount] = useState(initialState)



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
        <div>
            <h1> {count} </h1>
            <button onClick={() => { setCount(prevCount => (count + 1)) }}>Increment </button>
            <button onClick={() => { setCount(initialState) }}>Reset</button>
            <button onClick={() => { setCount(prevCount => (count - 1)) }}>Increment </button>
            <button onClick={() => { setCount(prevCount => (count + 5)) }}>Increment </button>

        </div >
    )
}

export default StateFunction
