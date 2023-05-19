import styled from "styled-components";

const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  background-color: var(--primary);

  h1 {
    padding-left: 5vw;
    color: var(--tertiary);
  }

  .desktopmenu {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
  }

  .desktopmenu a {
    color: var(--tertiary);
  }

  .hamburger {
    display: none;
  }

  .menu-container {
    display: none;
  }

  @media screen and (max-width: 780px) {
    width: 100vw;

    .desktopmenu {
      display: none;
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      margin: 5px;
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
      width: 40vw;
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
      width: 80%;
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
  }

  @media screen and (max-width: 380px) {
  }
`;

export default NavbarContainer;
