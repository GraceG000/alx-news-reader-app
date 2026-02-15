import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
  <h1 className="text-5xl text-blue-500 font-bold ">
    The Daily Tea News Site!!!
  </h1>
  <div className='mt-2'>
      <p>All the latest news and updates, all in one place</p>
  </div>
  
    </>
  )
}

export default App
