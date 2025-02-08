import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const SellerProfile = () => {


  const [selectedFile, setSelectedFile] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState('');
  const [fileName, setFileName] = useState('');
  const [currency, setCurrency] = useState("NGN");
  const [error, setError] = useState("");
  


  const handleAddImage = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert to Base64
      reader.onloadend = () => {
        setSelectedFile(reader.result); // Store Base64 instead of a blob URL
        setFileName(file.name);
        setError('');
      };
    
    }


  };
  

  const handleSubmit = () => {
    if (!selectedFile || description.trim() === "" || price.trim() === "") {
      setError("All fields are required!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      imageUrl: selectedFile,
      description,
      price,
      currency,
    };

    setSubmittedData((prevProducts) => [...prevProducts, newProduct]);

    // Clear inputs after submitting
    setDescription("");
    setPrice("");
    setSelectedFile(null);
    setFileName("");
    setError(""); // Clear error on successful submission
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
    setError('');
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
    setError('');
  }

  const handlePreferCurrency = (e) => {
    setCurrency(e.target.value);
  } 
   


  return (
    <div  style={{
      alignItems:'center',
      textAlign:'center'
    }}>
          {/* <BuyerNav/> */}
          {/* <SellerNav /> */}
      {/* <h1>
        You self no smalll
      </h1> */}
       <div className='container-fluid'>
          <Row>
              <Col md={6} style={{
                backgroundColor:'ButtonFace',
                textAlign:'left',
                height:'80vh'
              }}>
                    <h2>
                         Quotes to Inspire Your Investment Strategy
                    </h2>
                    <ul className='Quotes' >
                          <li>Buy low, sell high. It’s pretty simple—until emotions come into play</li>
                          <li>To be a successful investor, you have to divorce yourself from the fears and greed of the people around you</li>
                          <li>A goal without a plan is just a wish</li>
                          <li>Do not save what is left after spending, but spend what is left after saving</li>
                          {/* <li></li>
                          <li></li> */}
                    </ul>

               </Col>
               <Col md={6} >
                  <div className="productInput" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                     <input type="file" id="imageInput" accept="image/*"
                      onChange={handleAddImage} style={{ display: 'none' }} />
    
                     <label htmlFor="imageInput" style={{
                            padding: '10px 20px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            display: 'block'
                     }}>
                           Choose Image
                     </label>
                       {error && <p  style={{ color: 'red', fontSize: '14px' }}>Import Image</p>}
                     <span style={{ display: 'block', marginLeft: '10px' }}>{fileName}</span>

                     <textarea
                             placeholder="Enter description"
                             value={description}
                             onChange={handleDescriptionChange}
                             style={{ width: '100%', minHeight: '100px' }}
                    /> 
                          {error && <p  style={{ color: 'red', fontSize: '14px' }}>Add Description</p>}
                    <input
                          type="number"
                          value={price}
                          onChange={handlePrice}
                          style={{ width: '100%' }}
                   />
                         {error && <p  style={{ color: 'red', fontSize: '14px' }}>Input your Prefer Price</p>}
                   <select name="currency" value={currency} onChange={handlePreferCurrency} style={{ width: '100%' }}>
                          <option value="NGN">Naira (#)</option>
                          <option value="USD">Dollar ($)</option>
                  </select>

                           <button onClick={handleSubmit} style={{ width: '100%' }}>Submit</button>
                  </div>
               </Col>
          </Row>
          

       </div>

    </div>
  )
}

export default SellerProfile