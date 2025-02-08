import React, { useEffect, useState } from 'react'




const CartPage = () => {
    
    const [cartItem, setCartItem] = useState([]);

       useEffect (() =>{
            const cartProduct = localStorage.getItem('cartItem');
            if (cartProduct ) {
                setCartItem(JSON.parse(cartProduct));
            }
         },[]);

         const handleRemoveCart = (id) => {
               const newCartProduct =  cartItem.filter(product => product.id !== id );
               setCartItem(newCartProduct);
               localStorage.setItem('cartItem',JSON.stringify(newCartProduct));
         }

  return (
    <div className="product-container">
        {cartItem.map((product,index)=> (
            <div key={index} className='product-list'>
                  <img src={product.imageUrl} alt='' style={{ width: '100%', height: '200px', borderRadius:'5px' }} />
                  <p>{product.description}</p>
                  <p>{product.price} {product.currency}</p>
                  <button onClick={()=> handleRemoveCart(product.id)} >Remove</button>
            </div>
        ))}
    </div>
  )
}

export default CartPage