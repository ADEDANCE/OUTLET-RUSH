import React from 'react'
import Amazon1 from './assets/IMAGES/Amazon1.jpg';
import Amazon2 from './assets/IMAGES/Amazon2.jpg';
import Amazon3 from './assets/IMAGES/Amazon3.jpg'

const CarouselImages = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
    <img src={Amazon1} alt="" style={{ width: '300px', height: 'auto' }} />
    <img src={Amazon2} alt="" style={{ width: '300px', height: 'auto' }} />
    <img src={Amazon3} alt="" style={{ width: '300px', height: 'auto' }} />
  </div>
  )
}

export default CarouselImages