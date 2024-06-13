import React ,{useState}from 'react'

export default function About() {
  const[newuser,setnewuserName]=useState({
    name:'',
    email:'',
    password:''
  })
  function handleUser(e){
     const{name,value}=e.target
     console.log(name,value)
     setnewuserName(prevUser=>({
      ...prevUser,
      [name]:value
      //const handleUser=()=>{}
     }))
  }
  return (
    <div>
      <h1>  This is About </h1>
      <p><input placeholder="enter name"
      name="name"
      value={newuser.name}
      onChange={handleUser}/>
      </p>
      <p><input placeholder="enter email"
      name="email"
      value={newuser.email}
      onChange={handleUser}/>
      </p>
      <p>
        <input placeholder="enter password"
      name="password"
      value={newuser.password}
      onChange={handleUser}/>
      </p>
      <button onClick={()=>console.log(newuser)}>Submit</button>
    </div>
  )
}
