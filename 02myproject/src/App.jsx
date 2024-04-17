
import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter] = useState(15)
  // let counter =15
  const addvalue =()=>{
   setCounter((prevCounter) => prevCounter +1)
   setCounter((prevCounter) => prevCounter +1)
   setCounter((prevCounter) => prevCounter +1)
   setCounter((prevCounter) => prevCounter +1)
  }
  const removeValue =() =>{
   setCounter((prevCounter) => prevCounter -1)
   setCounter((prevCounter) => prevCounter -1)
   setCounter((prevCounter) => prevCounter -1)
   setCounter((prevCounter) => prevCounter -1)
  }
  

  return (
    <>
      <h1>React course with Zeetwo</h1>
      <h2>Counter value :{counter} </h2>
      <button onClick={addvalue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Button</button>
      <p>Footer : {counter} </p>

    </>
  )
}

export default App
