import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='p-5 rounded' style={{backgroundColor:"white",width:"38%"}}>
          <h1 className='text-primary mt-4 text-center'>Counter Application</h1>
          <Counter/>
        </div>

      </div>
    </>
  )
}

export default App
