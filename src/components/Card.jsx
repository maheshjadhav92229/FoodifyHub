import React from 'react'
import './Card.css'
import { FaCartShopping } from "react-icons/fa6";

const Card = ({cardData,cart,setCart}) => {
  let addToCart =(product)=>{
    let newCart = [...cart];
    let item= newCart.find((i)=> i.id === product.id);
    if(item){
      item.qty++;
    }else{
      newCart.push({...product,qty:1})
    }
    setCart(newCart);
  }
  return (
    <div className='card-container'>
      {cardData.map((item)=>{
         return (
    <div className='card' key={item.id}>
      <img src={item.image} alt="" />
      <h1>{item.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Facilis , </p>
         
{/* 
<p className="price">Price: &#8377;{item.price}</p> */}


         <p style={{ fontSize: "30px", fontWeight: "bold" }}>
  Price: &#8377;{item.price}
</p>
         <button onClick={()=>addToCart(item)}>Add to card</button>
     
    </div>
  )

      })}
    </div>
  )
 
}

export default Card
