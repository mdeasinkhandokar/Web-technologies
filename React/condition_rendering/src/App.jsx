import { useState } from 'react'
import './App.css'
import LogOut from './components/LogOut';
import LoginBtn from './components/LoginBtn';


function App() {

 const[isLoggedIn,setLoggedIn]=useState(false);

return (
  <div>
    <h1>Welcome to web Development Course</h1>
    {isLoggedIn ?<LogOut/>:<LoginBtn/>}
  </div>
)


 
// if(isLoggedIn){
//   return(
//     <LogOut/>
//   )
// }

// else{

//   return (
   
//     <LoginBtn/>
//   )

// }


}

export default App
