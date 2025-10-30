import { useEffect, useState } from 'react'
import './App.css'
import {useEffer} from 'react'

function App() {
  // const [count , setCount]=useState(0);
  // const[total, setTotal]=useState(1);

///first ->side-effect function
///second -> clean-up function
///third ->comma separated dep list



// useEffect(()=>{
//   first 

//   return()=>{
//     second
//   }

// },[count])



///variation :1
///runs on every render

// useEffect(()=>{

// alert("I will run on each render")  

// })

// function handleClick(){
//   setCount(count+1);
// }



// variation:2 
// that runsd on only first render

// useEffect(()=>{

// alert("I will run on only 1st render");

// },[])



// function handleClick(){
//   setCount(count+1);
// }




// variation:3 
// useEffect(()=>{

// alert("I will run every time when Count is update")

// },[count])

// function handleClick(){
//   setCount(count+1);
// }



//variation:4
//multiple dependencies
// useEffect(()=>{
//  alert(" I will run every time when count/total is updated")
// },[count, total])

// function handleClick(){
//   setCount(count+1);

  
// }

// function handleClickTotal(){
//   setTotal(total +2);
// }



///variation: 5
///add a cleanup function


// useEffect(()=>{

// alert("Count is update")

// return()=>{

//   alert("count is unmounterd form UI");


// }


// },[count])



// function handleClick(){
//   setCount(count+1);
// }

// function handleClickTotal(){
//   setTotal(total *2);
// }









  return (

      <div>
        {/* <button onClick ={handleClick}>
          update count
        </button>
      <br/>
        Count is :{count}
      <br/>



       <button onClick ={handleClickTotal}>
          update  total
        </button>
      <br/>
       Totat is :{total} */}


      </div>
      
  )
}

export default App
