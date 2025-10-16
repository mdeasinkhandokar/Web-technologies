
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {

  const[count, setCount]=useState(0);

  function handleClick(){
    setCount(count+1);
  }
 
  return (
   <div>
   
   <Button handleClick={handleClick} 
   text="click me">
    <h1>{count}</h1>
    </Button>




  {/* <Card name="easin khandokar">
    <h1> Best WEB DEV Course</h1>
    <p>Trying to be consistent in this </p>
    <p>will complete the course soon</p>

  </Card>
  <card children="i am child">
    Hi,how are you?
  </card> */}


   </div>
  )
}

export default App
