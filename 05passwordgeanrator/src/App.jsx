import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLeanth] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef =useRef(null)

  const genaratePassword = useCallback (() =>{
    let pass =""
    let str ="AbCdEfGhIjKlMnOpQrStUvWxYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str =+ "!@#$%^&*()_+"

    for (let i =1; i< length; i++){
      const char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword (pass)

  },[length, numberAllowed ,charAllowed])

  const copyPasswordToclipboard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() =>{
    genaratePassword()
  },[length, numberAllowed, charAllowed])

  return (
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
    <h1 className='text-white  my-3 text-center '>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" 
      value={password} 
      className='outline-none w-full py-1 px-3 ' 
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyPasswordToclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-2 '>
        <input type="range"
        min={8}
        max={16}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLeanth(e.target.value)}
        name=''
        id='' />
        <label htmlFor="length">length: {length}</label>
      </div>
      <div className='flex items-center gap-x-2 '>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev) => !prev)
        }}
        name=''
        id='' />
        <label htmlFor="number">Number</label>
      </div>
      <div className='flex items-center gap-x-2 '>
        <input type="checkbox"
        defaultChecked={charAllowed}
        onChange={()=>{
          setCharAllowed((prev) => !prev)
        }}
        name=''
        id='' />
        <label htmlFor="charInput">Character</label>
      </div>
    </div>
  </div>
  )
}

export default App
