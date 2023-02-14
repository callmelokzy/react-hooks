import React from 'react'
import { useState } from 'react'

function UseStateWithArray() {
  // Declare a state variable 'items' and initialize it to an empty array
  const [items, setItems] = useState([])

  // Define a function 'addItem' that adds a new item to the 'items' array
  const addItem = () => {
    // Use the spread operator to create a new array with all the existing items
    // Then add a new item to the end of the array, with a unique 'id' and a random 'value'
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10)+1
    }])
  }

  // Render a button that calls 'addItem' when clicked, and a list of 'items'
  return (
    <div>
      <button onClick={addItem}> Add a Number </button>

      <ul>
        {/* Use the 'map' function to render a list item for each 'item' in the 'items' array */}
        {/* The 'key' attribute is set to the 'id' of the item, to help React identify each item */}
        {items.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    </div >
  )
}

export default UseStateWithArray
