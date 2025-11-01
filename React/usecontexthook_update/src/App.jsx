import { useState } from 'react'
import { createContext } from 'react';
import './App.css'
import ChildA from './components/ChildA'


///step 1: create Context
const UserContext = createContext();
///step2: wrap all the child inside a provider
///steo 3: pass value
///step 4: consumer consume the value

function App() {

  const [user,setUser]= useState({name:"Love"});

  return (
    <>
    <userContext.provider value= {user}>
    <ChildA/>
    </userContext.provider>
   
       
    </>
  )
}

export default App
export {UserContext}
