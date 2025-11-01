import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';


//create Context
const UserContext =createContext();



function App() {


  return (

    <>
    <ChildA/>
    
    
    </>
  )
}

export default App
