import React from 'react';

export default function Displaycards({ props }) {
    return (
        <div>
            {props.map((car, index) => (
                <div key={index}>
                    <p>Name{car.CarName}</p>
                    <p>Price: {car.CarPrice}</p>
                    <p>Description: {car.CarDescription}</p>
                    <img src={car.picture} alt={{car,CarName} }  />
                </div>
            ))}
        </div>
    );
}
























// import React from 'react'

// export default function Displaycards(props) {
//   console.log(props)
//   return (
//     <div>
//       {
//         props.cardetails.map((car)=>(
//           <div>
//             <h1>cardetails</h1>
//                <p> CarName:{car.name}</p>
//                <p> CarPrice{car.price}</p>
//                <p> CarDescription{car.description}</p>
//                <img src={car.picture} alt ={car.name}/> 
//             </div>
//         ))
//       }
//     </div>
//   )  
// }
