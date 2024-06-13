import{useState}from 'react'  
// import Student from './Student' 
// import List from './List'
// import Input from './Input'
//  import Cards from './Cards'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from'./components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App(){
  const[studentName, setStudentName]=useState('Vasanthi')//creating a variable 
  const[age,setAge]=useState(21)
  return(
    <div>
       {/* <List/>
      <Input/> */}
      {/* <Cards/>  */}
      {/* <p> Hello All</p>
      <p> Name is :{ studentName} and her age is :{age}</p>
      <Student name= " Pavani" rollno= "22" />
      <Student name= " Shashi priya" rollno= "15" />
      <Student name= "navya" rollno="38"/> */}
      <BrowserRouter>
      <Navigation/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            
         </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App;
