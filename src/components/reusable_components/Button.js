import React from 'react'

function Button({addItem}) {
    return (
        <div>
            <button onClick={addItem}>Add to Cart</button>
        </div>
    )
}

export default Button
