import React, { useEffect, useState } from 'react'

const ProductPage = () => {
    const [submittedData, setSubmittedData] = useState([]);
    const [cartItem, setCartItem] = useState([]);

     useEffect (() => {
                  const savedProducts  = localStorage.getItem('submittedData');
                
                  if (savedProducts) {
                    setSubmittedData(JSON.parse(savedProducts));
                  }
                },[]);

     const handleAddToCart = (product) =>{
         const updatedCart = [...cartItem, product];
         localStorage.setItem('cartItem',JSON.stringify(updatedCart));
         setCartItem(updatedCart);
     }

     useEffect (() =>{
        const cartProduct = localStorage.getItem('cartItem');
        if (cartProduct ) {
            setCartItem(JSON.parse(cartProduct));
        }
     },[]);


  return (
    <div>
    {submittedData.length > 0 && (
<>
<h3>PRODUCTS</h3>
<div className="product-container">
{submittedData.map((product, index) => (
<div key={index} className='product-list' >
<img src={product.imageUrl} alt='' style={{ width: '100%', height: '200px', borderRadius:'5px' }} />
<p>{product.description}</p>
<p>{product.price} {product.currency}</p>
<button onClick={() => handleAddToCart(product)}>ADD TO CART</button>
</div>
))}
</div>
</>
)}
</div>
  )
}

export default ProductPage