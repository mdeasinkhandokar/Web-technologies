
import UserCard from "./components/UserCard"
import Ek from '../assets/Ek.jpg'
import sa from '../assets/sa.jpg'
import s from '../assets/s.jpg'




function App() {


  return (
   
    <div className="container">
   <UserCard name="Easin" desc="desc1" image={Ek}/>
   <UserCard name="Sanim" desc="desc2" image={sa}/>
   <UserCard name="Shafin" desc="desc3" image={s}/>






    </div>
  )
}

export default App
