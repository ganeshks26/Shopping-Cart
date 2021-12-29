import React from 'react'
import Button from "./reusable_components/Button"

function CardInfo({shoePrice,updateCart}) {
    return (
        <div className="cardInfo">
            <p>${shoePrice}</p>
            <Button addItem={updateCart}/>
        </div>
    )
}

export default CardInfo
