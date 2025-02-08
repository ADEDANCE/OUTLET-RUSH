import React, { useEffect, useState } from 'react'


const ProductView= () => {
      const [submittedData, setSubmittedData] = useState([]);

  
      
       useEffect (() => {
              const savedProducts  = localStorage.getItem('submittedData');
            
              if (savedProducts) {
                setSubmittedData(JSON.parse(savedProducts));
              }
            },[]);
      

      const handleDeleteProduct = (id) => {
        const newProducts = submittedData.filter(product => product.id !== id);
        setSubmittedData(newProducts);
        localStorage.setItem('submittedData', JSON.stringify(newProducts));
      };

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
        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
      </div>
    ))}
    </div>
  </>
)}
    </div>
  )
}

export default ProductView