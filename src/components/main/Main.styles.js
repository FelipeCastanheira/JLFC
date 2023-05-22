import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
padding: 5%;
background-color: var(--secondary);
justify-content: center;

.left{
  text-align: left;
}

.right{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
}

form{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
}

form input{
  width: 52%;
  border-radius: 20px;
  border: none;
  height: 20px;
}

form textarea{
  width: 50%;
  border-radius: 10px;
  border: none;
  padding: 5px;
}

form button{
  width: 30%;
  border: none;
  border-radius:20px;
  background-color: var(--tertiary);
  color: white;
  height: 30px;
}

form button:hover{
cursor: pointer;
opacity: .6;
}

form label{
  width: 52%;
  text-align: left;
}


  @media screen and (max-width: 780px) {
flex-direction:column;
padding: 0;
gap: 20px;

h1{
  text-align: center;
  font-size: 28px;
}

.right{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

form{
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  gap: 5px;
}

form input{
  width: 80%;
  border-radius: 20px;
  border: none;
  height: 20px;
}

form textarea{
  width: 80%;
  border-radius: 10px;
  border: none;
  padding: 5px;
}

form button{
  width: 30%;
  border: none;
  border-radius:20px;
  background-color: var(--tertiary);
  color: white;
  height: 20px;
}

form button:hover{
cursor: pointer;
opacity: .6;
}

form label{
  width: 80%;
  text-align: left;
}



  }

  @media screen and (max-width: 380px) {
  }
`;

export default MainContainer;
