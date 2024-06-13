import React,{useState} from 'react'
import Displaycards from './Displaycards'

export default function Cards() {
    const[cardetails,setCarDetails]=useState([{
        CarName: "ford",
        CarPrice: "5000000",
        CarDescription:"Ford Motor Co (Ford) is an automotive company, which designs, manufactures, markets and services a full line of cars, trucks, sport utility vehicles and electrified vehicles.",
        picture:"https://www.google.com/imgres?q=ford%20car%20description&imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F664x374%2Fn%2Fcw%2Fec%2F37640%2Fendeavour-exterior-right-front-three-quarter-149472.jpeg%3Fq%3D80&imgrefurl=https%3A%2F%2Fwww.carwale.com%2Fford-cars%2F&docid=q7oqj6HksD6R7M&tbnid=ID6HchP5TxX6oM&vet=12ahUKEwigp6qBxNOGAxU09zgGHT_6CLgQM3oECBQQAA..i&w=664&h=374&hcb=2&ved=2ahUKEwigp6qBxNOGAxU09zgGHT_6CLgQM3oECBQQAA"
       },
        {
        CarName: "volvo",
        CarPrice: "8000000",
        CarDescription:"Volvo Cars (Swedish: Volvo personvagnar, styled VOLVO in the company's logo) is a Swedish multinational manufacturer of luxury vehicles. Volvo is headquartered in Torslanda, Gothenburg. The company manufactures SUVs, station wagons, and sedans.",
        picture:"https://www.google.com/imgres?q=volvo&imgurl=https%3A%2F%2Fakm-img-a-in.tosshub.com%2Findiatoday%2Fimages%2Fstory%2F201904%2FVolvo_XC90_1.jpeg%3FVersionId%3DCtqJcWw4aLxd2Mp5J6V77iNm2Ix7L.kK%26size%3D690%3A388&imgrefurl=https%3A%2F%2Fwww.indiatoday.in%2Fauto%2Flatest-auto-news%2Fstory%2F25-percent-sales-growth-for-volvo-cars-india-financial-year-2019-1494663-2019-04-05&docid=t6jcRkJawUjp_M&tbnid=uq-i0R4uC2wMPM&vet=12ahUKEwj7n7KcxNOGAxV01TgGHfNMDawQM3oECDcQAA..i&w=690&h=388&hcb=2&ved=2ahUKEwj7n7KcxNOGAxV01TgGHfNMDawQM3oECDcQAA"
        },
        {
            CarName: "MercedesBenz",
            CarPrice: "10000000",
            CarDescription:"Mercedes-Benz Group AG (Mercedes-Benz), formerly Daimler AG, is an automobile vehicle manufacturing company. It develops, manufactures, and distributes passenger cars, two-seater cars, vans, and accessories.",
            picture:"https://www.google.com/imgres?q=mercedes%20benz&imgurl=https%3A%2F%2Fwww.motortrend.com%2Fuploads%2Fsites%2F10%2F2023%2F07%2F2023-mercedes-benz-s-class-580-maybach-sedan-angular-front.png&imgrefurl=https%3A%2F%2Fwww.motortrend.com%2Fcars%2Fmercedes-benz%2F&docid=ABQ4sAg0NXcE5M&tbnid=1z31G7bqgqYXaM&vet=12ahUKEwjlsYi1xNOGAxVLwjgGHXQDCjMQM3oECH0QAA..i&w=1920&h=1275&hcb=2&ved=2ahUKEwjlsYi1xNOGAxVLwjgGHXQDCjMQM3oECH0QAA"
        }
    

    ])
  return (
    <div>
          <Displaycards carDetails={cardetails}/>

    </div>
  )
}
