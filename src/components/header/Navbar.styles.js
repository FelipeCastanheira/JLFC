import styled from "styled-components";

const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  background-color: var(--primary);
  border-bottom: solid 2px black;
  overflow-x: hidden;
  overflow-y: hidden;

  h1 {
    padding-left: 5vw;
    color: var(--tertiary);
  }

  .logo {
    width: 20%;
  }

  .desktopmenu {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
  }

  .desktopmenu a {
    color: var(--tertiary);
  }

  .desktopmenu a:hover {
    border-bottom: black 1px solid;
    transition: 0.5s;
    cursor: pointer;
  }
  .hamburger {
    display: none;
  }

  .menu-container {
    display: none;
  }

  @media screen and (max-width: 780px) {
    width: 100vw;
    height: 10vh;

    .desktopmenu {
      display: none;
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      margin: 10%;
    }

    .hamburger span {
      width: 30px;
      height: 3px;
      background-color: var(--tertiary);
      margin-bottom: 5px;
    }

    .menu-container {
      display: block;
      position: fixed;
      top: 0;
      right: -250px;
      width: 50vw;
      height: 100vh;
      background-color: var(--primary);
      transition: transform 0.3s ease-in-out;
    }

    .menu-container.open {
      transform: translateX(-250px);
    }

    .menu {
      list-style-type: none;
      padding: 20px;
      width: 70%;
    }

    .menu a {
      width: 100%;
      text-align: center;
    }

    .closebutton {
      position: relative;
      left: 40%;
      background-color: transparent;
      border: none;
    }

    .logo {
      width: 40%;
    }
  }

  @media screen and (max-width: 370px) {
    .menu {
      width: 65%;
    }
  }

  @media screen and (max-width: 330px) {
    .menu {
      width: 55%;
    }

    a{
      font-size: 14px;
    }
  }

`;

export default NavbarContainer;
