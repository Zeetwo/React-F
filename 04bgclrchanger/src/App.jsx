/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  // function chnageColor(color){
  //   setColor(color)
  // }

  return (
   <div className='w-full h-screen duration-500' style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-neutral-100 px-3 py-2 rounded-3xl ">
        <button onClick={() => setColor("red")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-600'>Red</button>
        <button onClick={() => setColor("Blue")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-700'>Blue</button>
        <button onClick={() => setColor("Green")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-600'>Green</button>
        <button onClick={() => setColor("orange")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-orange-400 '>Orange</button>
        <button onClick={() => setColor("purple")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-purple-500'>Pruple</button>
        <button onClick={() => setColor("yellow")} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-amber-400 '>Yellow</button>
      </div>
    </div>
   </div>
  )
}

export default App
