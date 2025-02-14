import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../NAVBARS/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import {Row,Col} from 'react-bootstrap'
import  Amazon1 from '../assets/IMAGES/Amazon1.jpg';
import  Amazon2 from '../assets/IMAGES/Amazon2.jpg';
import  Amazon3 from '../assets/IMAGES/Amazon3.jpg';





function Wmessage() {

    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleShowPopup = () => {
        setPopupVisible(true);
    }

    const handleHidePopup = () => {
        setPopupVisible(false);
    }

    const navigate = useNavigate();
        const handleSignupseller = () => {
          navigate("/SignupSeller"); 
        };
        const handleSignupbuyer = () => {
            navigate("/SignupBuyer")
        }

  return (
    <div>
         <Navbar />
        <div>
        <Carousel>
      <Carousel.Item>
      <img src={Amazon1} alt="Amazon Product" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src={Amazon2} alt="Amazon Product" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src={Amazon3} alt="Amazon Product" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    <p style={{backgroundColor: '#ff6600', marginTop:'100px', padding:'30px', color:'#fff'}}>
    <marquee behavior="scroll" direction="left" >
               Thank you for choosing OUTLET RUSH —where style meets innovation. We're excited to be part of your journey  
    </marquee>
    </p>

                <div className='container-fluid About '>
                  
                      <h3>What is Outlet Rush?</h3>
                      <a href="">Read our Wondarfully story</a>
                     <Row>
                          <Col md={4} >
                              <h3>A community doing good</h3>
                              <p>Etsy is a global online marketplace, 
                                where people come together to make, sell, buy,
                                 and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.</p>
                          </Col>
                          <Col md={4} >
                                <h3>Support idependent creators</h3>
                                <p>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly 
                                  with makers to find something extraordinary.</p>
                          </Col>
                          <Col md={4} >
                               <h3>Peace of mind</h3>
                               <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance,
                                 we are always ready to step in for support.</p>
                          </Col>
                     </Row>
                       <h3>Have a question? Well, we’ve got some answers.</h3>
                       <button>GO to Help Center</button>
                </div>

                 
        </div>
        <div>
             <button onClick={handleShowPopup  }  style={{backgroundColor: ' #ff6600' }} >SignUp</button>  
             {
                isPopupVisible && (
                    <div> 
                        <p>Chose prefer account</p>
                           <button onClick={handleSignupseller}>Sign-up as seller</button>
                           <button onClick={handleSignupbuyer}>Sign-up as buyer</button>
                    </div>
                )
             }
        </div>
    </div>
  )
}



export default Wmessage