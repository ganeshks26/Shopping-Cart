import React from 'react'
import Card from './Card'

function CardContainer({updateCart}) {
    return (
        <div className="cardContainer">
            <Card updateCart={updateCart}/>
        </div>
    )
}

export default CardContainer
