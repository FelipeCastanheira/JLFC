import React, { useState } from "react";
import TypesWebContainer from "./TypesWeb.styles";
import up from "../../assets/arrowup.png";
import down from "../../assets/arrowdown.png";

function TypesWeb() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  return (
    <TypesWebContainer>
      <h2>You're 3 steps away from having your own website</h2>

      <div className="card">
        <div className="titlecard">
          <h3>1st Step - Consult with us</h3>
          <button onClick={() => setIsClicked(!isClicked)}>{isClicked ? "Close" : "More Info"}</button>
        </div>
        {isClicked ? (
          <p>
            {" "}
            In this call, you'll directly communicate with one of our developers
            who will serve as the lead for your project. We will ask targeted
            questions to gain insights into your business, needs, and determine
            the optimal approach for your online presence. Our developers are
            proficient in English, Portuguese, and Spanish for seamless
            communication.
          </p>
        ) : null}
      </div>

      <div className="card">
        <div className="titlecard">
          <h3>2º STEP - GET A FREE QUOTE</h3>
          <button onClick={() => setIsClicked2(!isClicked2)}>{isClicked2 ? "Close" : "More Info"}</button>
        </div>
        {isClicked2 ? (
          <p>
            Within 48 hours of your call, we will provide you with a detailed
            email containing a personalized quote for your website.
          </p>
        ) : null}
      </div>

    <div className="card">
        <div className="titlecard">
          <h3>3º STEP - Receive your website</h3>
          <button onClick={() => setIsClicked3(!isClicked3)}>{isClicked3 ? "Close" : "More Info"}</button>
        </div>
        {isClicked3 ? (
          <p>
            {" "}
            As every project's complexity differs, providing a general deadline
            is challenging. However, our team of developers will maintain
            regular communication with you to keep you informed about your
            website's progress. Once it's ready, we'll send it to you for
            analysis and to gather your valuable feedback. Based on your input,
            we will make necessary adjustments to ensure all your needs are met.
          </p>
        ) : null}
      </div> 
    </TypesWebContainer>
  );
}

export default TypesWeb;
