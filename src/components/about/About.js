import React from "react";
import AboutContainer from "./About.styles";
import phone from '../../assets/phone.png';
import google from '../../assets/google.png';
import cart from '../../assets/cart.png'

function About() {
  return (
    <AboutContainer>

      <div className="card">
        <div className="circle"><img src={phone}></img></div>
        <p>Responsive websites to fit all devices</p>
      </div>

      <div className="card">
        <div className="circle"><img className="google" src={google}></img></div>
        <p>SEO OPTIMIZED FOR GOOGLE RESULTS</p>
      </div>

      <div className="card">
        <div className="circle"><img src={cart}></img></div>
        <p>E-COMMERCE CAPABILITIES TO expand market</p>
      </div>
      
    </AboutContainer>
  );
}

export default About;
