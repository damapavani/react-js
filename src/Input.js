import React,{useState} from 'react'
import './Input.css'
export default function Input() {
    const[userName,setuserName]=useState('')
    const[userid,setuserId]=useState('')
    function handleUserName(e){
        setuserName(e.target.value)
    }
    
    function submit(){
        console.log(userName)
        console.log(userid)
    }

  return (
    
    <div className='container'> 
      <p>
        <input placeholder='enter name' onChange={handleUserName}/>
        <input placeholder='enter ID' 
        onChange={(e)=> setuserId(e.target.value)}/>
        <button onClick={submit}>Submit</button>

      </p>
    </div>
  )
}
