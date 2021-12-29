import React from 'react'
import Cardbg from './Cardbg'
import CardInfo from './CardInfo'
import ShoeData from "./ShoeData"

function Card({updateCart}) {
    return (
        <>
        {ShoeData.map((shoe,index)=>(
            <div key={index} className="card">
            <Cardbg shoeImg={shoe.cardImg}/>
            <CardInfo shoePrice={shoe.cardPrice}
            // to get the value from here
            updateCart={()=>updateCart(shoe.cardImg,shoe.cardPrice)} 
            
            /> 
            </div>
        ))}
            
        </>
    )
}

export default Card
