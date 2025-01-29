import React, { useEffect, useState } from 'react'
import BuyerNav from '../../NAVBARS/BuyerNav'

const SellerProfile = () => {

  const [proDucts,setProDucts] = useState([]);
  const [inputValue, setInputValue] = useState('');  
  
  useEffect (() => {
    const savedProducts = localStorage.getItem('proDucts');
    if (savedProducts ) {
      setProDucts(JSON.parse(savedProducts));
    }
  }, [])

  useEffect (() => {
    if (proDucts.length > 0) {
      localStorage.setItem('product',JSON.stringify(proDucts));
    }
  },[]);

  const handleOnchange = (e) =>{
    setInputValue(e.target.value);
  };

  const handleAddproduct = () => {
    e.preventdefault();
    if (inputValue.trim() !== '') {
      setProDucts([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue(''); // Reset input field after adding task
    }
  }

  return (
    <div>
          <BuyerNav/>
      <h1>
        You self no smalll
      </h1>
      <div >
              <input type="text" 
                 onChange={handleOnchange}
              />
              <button onClick={handleAddproduct} >Add product</button>
      </div>

    </div>
  )
}

export default SellerProfile