import React from 'react'
import Container from "./reusable_components/Container"

function Nav({hiddenMenu,setHiddenMenu,itemCount}) {
    return (

        <nav>
            <Container>
                <h2>Shoes</h2>
                <div className="menuWrapper" onClick={()=>setHiddenMenu(!hiddenMenu)}>
                <i className={hiddenMenu?"fas fa-times":"fas fa-shopping-cart"}></i>
                <p>{itemCount>0 && itemCount}</p>   
                </div>
            </Container>
        </nav>

    )
}

export default Nav
