import React,{useState} from 'react';
import CardContainer from './CardContainer';
import Nav from './Nav';
import ShoppingCartContainer from './ShoppingCartContainer';
import Container from './reusable_components/Container';
import { v4 as uuidv4 } from 'uuid';



function Hero() {

    const[totalPrice,setTotalPrice] =useState(0)
    const[itemCount,setItemCount] = useState(0)
    const[cartItems,setCartItems] = useState([])
    const[hiddenMenu,setHiddenMenu] = useState(false)

    const updateCart=(shoeImg,shoePrice)=>{
        setItemCount(prevCount=>prevCount+1)
        setTotalPrice(prevPrice=>prevPrice+shoePrice)

       if(cartItems.find((item)=>item.img===shoeImg)){
           const result=cartItems.find(item=>item.img===shoeImg)
           result.cartCount++
           return;
       }

        setCartItems([...cartItems,
            {img:shoeImg,price:shoePrice,id:uuidv4(),cartCount:1},
        ])
    }

    const removeItem=(id)=>{
       const newItems=cartItems.filter((cartItem)=>(cartItem.id!==id))
       setCartItems(newItems)

       const itemCountResult=newItems.reduce((acc,val)=>(
           acc+=val.cartCount
       ),0)
       setItemCount(itemCountResult)

       const priceResult=newItems.reduce((acc,val)=>(
           acc+=val.price*val.cartCount
       ),0)
       setTotalPrice(priceResult)
    }

    return (
        <section className="hero">
            <Nav hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu} itemCount={itemCount}/>
            <Container>
                <CardContainer updateCart={updateCart}/>
                <ShoppingCartContainer totalPrice={totalPrice} itemCount={itemCount} cartItems={cartItems} hiddenMenu={hiddenMenu} removeItem={removeItem}/>
            </Container>
        </section>
    )
}

export default Hero
