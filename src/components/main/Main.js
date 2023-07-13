import React, {useState} from "react";
import MainContainer from "./Main.styles";
import main from "../../assets/main.png";
import mainmobile from "../../assets/mainmobile.png";

function Main() {
const [isClicked, setIsClicked] = useState(false)




  return (
    <MainContainer mainmobile={mainmobile} main={main}>
      <h1 className={isClicked ? 'h1off' : 'h1on'}>
        Powering digital success for businesses of all sizes.
        <button onClick={()=>{setIsClicked(!isClicked)}}>Get to know us!</button>
      </h1>

      <div className={isClicked ? "modalon" : "modaloff"}>
        <button onClick={()=>{setIsClicked(!isClicked)}} className="closebutton">X</button>
        <p>
          We are a globally diverse web development company with a team of
          highly qualified developers. Our mission is to be an international
          company that communicates seamlessly with our customers. We not only
          specialize in web development but also ensure that every website we
          create is optimized to meet all marketing needs, driving sales and
          enhancing customer retention.
        </p>
      </div>

    </MainContainer>
  );
}

export default Main;
