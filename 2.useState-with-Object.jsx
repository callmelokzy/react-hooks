import React from 'react'
import { useState } from 'react'

function UseStateWithObject() {
  // Declare state variable 'name' using the 'useState' hook and initialize it with an object containing firstname and lastname properties
  const [name, setName] = useState({ firstname: 'John', lastname: 'Doe' })

  // Return JSX to render a form with two input fields for firstname and lastname, and display the current values of the state variable 'name' using h2 tags
  return (
    <div>
      <form className="form">
         {/* Update the 'firstname' property of the 'name' object in the state variable by creating a new object with the spread syntax and replacing the 
         'firstname' property with the new value entered in the input field */}
        <input type="text" name="firstname" onChange={e => setName({ ...name, firstname: e.target.value })} ></input>

        {/* // Update the 'lastname' property of the 'name' object in the state variable by creating a new object with the spread syntax and replacing the 
        'lastname' property with the new value entered in the input field */}
        <input type="text" name="lastname" onChange={e => setName({ ...name, lastname: e.target.value })}></input>
        {/* // Display the current value of the 'firstname' property of the 'name' object in the state variable using an h2 tag */}
        
        <h2>Your firstname is: {name.firstname}</h2>
        {/* // Display the current value of the 'lastname' property of the 'name' object in the state variable using an h2 tag */}
        
        <h2>Your lastname is: {name.lastname}</h2>
        {/* // Display the entire state variable 'name' as a JSON string using an h2 tag */}
        
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default UseStateWithObject


// Note: The spread syntax (...) is used in the onChange event handlers to create a new object with the existing properties of the name object in the state, a
// nd overwrite the firstname or lastname property with the new value entered in the corresponding input field.