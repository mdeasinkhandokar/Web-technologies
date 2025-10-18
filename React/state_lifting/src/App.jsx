import { useState } from 'react'

import './App.css'
import Card from './components/Card.jsx'
function App() {


  //create state
  //manage state
  //change state
  //all child state sync

  const [name,setName]=useState('');


  return (
  <div>
     <Card title="Card1" name={name} setName={setName}/>
      <Card title ="Card2" name={name} setName={setName}/>
     {/* <p>I am inside Parent Component and value of name is {name}</p> */}
  </div>
       
  )
}

export default App
