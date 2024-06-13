import React from 'react'
import { useState } from 'react'
import './Home.css'
export default function Home() {
  const[userName,setUserName]=useState('')
  const[userpassword,setUserPassword]=useState('')
  function handleUserName(e){
    setUserName(e.target.value)
}

function submit(){
    console.log(userName)
    console.log(userpassword)
    setUserName('')
    setUserPassword('')
}
  return (
    <div className='container'>
      <h1 className='main'> This is Home</h1>
      <p>
        <input  value={userName}placeholder='enter name' onChange={handleUserName}/>
        <p><input value={userpassword} placeholder='enter password' 
        onChange={(e)=> setUserPassword(e.target.value)}/></p>
        <p><button onClick={submit}>Submit</button></p>
        </p>
    </div>
  )
}
