import React, { useEffect, useState } from 'react'
import BuyerNav from '../../NAVBARS/BuyerNav'

const SellerProfile = () => {

  const [proDucts,setProDucts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState('');
  
  useEffect (() => {
    const savedProducts = localStorage.getItem('proDucts');
    if (savedProducts ) {
      setProDucts(JSON.parse(savedProducts));
    }
  }, [])

  useEffect (() => {
    if (proDucts.length > 0) {
      localStorage.setItem('proDucts', JSON.stringify(proDucts));
    }
  },[proDucts]);

  const handleOnchange = (e) =>{
    setInputValue(e.target.value);
  };

  const handleAddproduct = () => {
    // e.preventdefault();
    if (inputValue.trim() !== '') {
      setProDucts([...proDucts, { id: Date.now(), text: inputValue }]);
      setInputValue(''); 
    }
  }

  const handleDeleteProduct = (id) => {
    const newProduct = proDucts.filter(product => product.id !== id);
    setProDucts(newProduct);
  }
  
  const handleAddImage = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    } 

  };

  const handleSubmit = () => {
    if (selectedFile && description.trim() !== '') {
      setSubmittedData({
        imageUrl: URL.createObjectURL(selectedFile),
        description,
      });
       
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
   

  return (
    <div>
          <BuyerNav/>
      <h1>
        You self no smalll
      </h1>
       
       <div>
            <input type="file" id="imageInput" accept='image/*' onChange={handleAddImage}   style={{ display: 'none' }}  />
            <label htmlFor="imageInput" style={{
        padding: '10px 20px',
        // backgroundColor: '#007bff',
        // color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
        display: 'inline-block'
      }}>
        Choose Image
      </label>

      <span style={{ marginLeft: '10px' }}>{fileName}</span>
            <textarea
      placeholder="Enter description"
      value={description}
      onChange={handleDescriptionChange}
    />

            <button onClick={handleSubmit} >submit</button>


      

            
       </div>

      <div >
              <input type="text" 
              value={inputValue}
                 onChange={handleOnchange}
              />
              <button onClick={handleAddproduct} >Add product</button>
      </div>
            {proDucts.map((product) => (
              <li key={product.id}>
                <span className="text">{product.text}</span>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </li>
            ))}

{submittedData  &&  (
    <div>
                <img src={submittedData.imageUrl} alt='' style={{ width: "200px" }} />
                <p>{submittedData.description}</p>
    </div>
) }
    </div>
  )
}

export default SellerProfile