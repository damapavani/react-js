import React ,{useState} from 'react'
import './List.css'


export default function List() {
    const[employee,setEmployee]=useState([{
        name:"Hemanth",
        age:20,
        gender: "male",
        id:1
      },
    {
        name:"eswar",
        age:22,
        gender: "female",
        id:2   
    },
    {
    name:"teja",
    age:21,
    gender: "male",
    id:3
    },
    {
      name:"pavan",
      age:20,
      gender: "male",
      id:4

    },
    {
      name:"chandra",
      age:21,
      gender: "male",
      id:5
    }
  ])
  return (
    <div className='employee-container'>
    
      {
        employee.map((emp)=>(
          < div className='employee' key={emp.id}>
            <p>Name:{emp.name}</p>
            <p>Age:{emp.age}</p>
            <p>Gender:{emp.gender}</p>
            <p>ID:{emp.id}</p>
          </div>

        ))
      }
    </div>
   
  )
}
