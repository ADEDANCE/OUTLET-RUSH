import React, { useEffect, useState } from 'react'
import BuyerNav from '../../NAVBARS/BuyerNav'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const SellerProfile = () => {

  // const [proDucts,setProDucts] = useState([]);
  // const [inputValue, setInputValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState('');
  const [fileName, setFileName] = useState('');
  const [currency, setCurrency] = useState("NGN");
  


  const handleAddImage = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert to Base64
      reader.onloadend = () => {
        setSelectedFile(reader.result); // Store Base64 instead of a blob URL
        setFileName(file.name);
      };
    
    }
  };
  

const handleSubmit = () => {
  if (selectedFile && description.trim() !== "" && price.trim() !== "" && currency) {
    const newProduct = {
        id: Date.now(),// Generate a unique ID
        imageUrl: selectedFile,
      // imageUrl: URL.createObjectURL(selectedFile),
      description,
      price,
      currency,
     
    };

    setSubmittedData(prevProducts => [...prevProducts, newProduct]);
  
    // Clear input fields
    setDescription("");
    setPrice("");
    setSelectedFile(null);
    setFileName("");
  }
};

useEffect (() => {
  const savedProducts  = localStorage.getItem('submittedData');

  if (savedProducts) {
    setSubmittedData(JSON.parse(savedProducts));
  }
},[]);

useEffect(() => {
  if (submittedData.length > 0) {
    localStorage.setItem('submittedData', JSON.stringify(submittedData));
  }
}, [submittedData]);







  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  }

  const handlePreferCurrency = (e) => {
    setCurrency(e.target.value);
  } 
   
  const handleDeleteProduct = (id) => {
    const newProducts = submittedData.filter(product => product.id !== id);
    setSubmittedData(newProducts);
    localStorage.setItem('submittedData', JSON.stringify(newProducts));
  };

  return (
    <div  style={{
      alignItems:'center',
      textAlign:'center'
    }}>
          <BuyerNav/>
      {/* <h1>
        You self no smalll
      </h1> */}
       <div className='container-fluid'>
          <Row>
              <Col md={6}>
                    <h2>
                         Quotes to Inspire Your Investment Strategy
                    </h2>
                    <ul>
                          <li>Buy low, sell high. It’s pretty simple—until emotions come into play</li>
                          <li>To be a successful investor, you have to divorce yourself from the fears and greed of the people around you</li>
                          <li>A goal without a plan is just a wish</li>
                          <li>Do not save what is left after spending, but spend what is left after saving</li>
                          <li></li>
                          <li></li>
                    </ul>

               </Col>
               <Col md={6} >
                  <div className="productInput" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                     <input type="file" id="imageInput" accept="image/*" onChange={handleAddImage} style={{ display: 'none' }} />
    
                     <label htmlFor="imageInput" style={{
                            padding: '10px 20px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            display: 'block'
                     }}>
                           Choose Image
                     </label>

                     <span style={{ display: 'block', marginLeft: '10px' }}>{fileName}</span>

                     <textarea
                             placeholder="Enter description"
                             value={description}
                             onChange={handleDescriptionChange}
                             style={{ width: '100%', minHeight: '100px' }}
                    /> 

                    <input
                          type="number"
                          value={price}
                          onChange={handlePrice}
                          style={{ width: '100%' }}
                   />

                   <select name="currency" value={currency} onChange={handlePreferCurrency} style={{ width: '100%' }}>
                          <option value="NGN">Naira (#)</option>
                          <option value="USD">Dollar ($)</option>
                  </select>

                           <button onClick={handleSubmit} style={{ width: '100%' }}>Submit</button>
                  </div>
               </Col>
          </Row>
          
          {submittedData.length > 0 && (
  <>
    <h3>PRODUCTS</h3>
    {submittedData.map((product, index) => (
      <div key={index}>
        <img src={product.imageUrl} alt='' style={{ width: '200px' }} />
        <p>{product.description}</p>
        <p>{product.price} {product.currency}</p>
        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
      </div>
    ))}
  </>
)}
       </div>
  



          


    </div>
  )
}

export default SellerProfile