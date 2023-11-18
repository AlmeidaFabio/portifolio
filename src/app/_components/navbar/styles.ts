import styled from "styled-components"

export const NavBar = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const MenuIcon = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 24px;
    background-color: transparent;
    border: none;
    outline: none;
    transition: all ease .5;

    &:hover {
        opacity: .8;
    }
`

export const Bar = styled.div<{ open: boolean}>`
    width: 100%;
    height: 4px;
    background-color: #333;
    transition: 0.4s;
    background-color: whitesmoke;
    display: none;

    @media(max-width: 900px) {
        display: ${(props) => (props.open ? 'none' : 'block')};
    }
`

export const CloseButton = styled.button<{ open: boolean}>`
    display: none;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    color: whitesmoke;
    background-color: transparent;
    transition: all ease .5;

    &:hover {
        opacity: .8;
    }

    @media(max-width: 900px) {
        display: ${(props) => (props.open ? 'block' : 'none')};
        position: absolute;
        top: 2%;
        right: 5%;
    }
`

export const MenuItems = styled.ul<{ open: boolean}>`
  list-style: none;
  display: flex;
  

  @media(max-width: 900px) {
    width: 240px;
    display: ${(props) => (props.open ? 'block' : 'none')};
    top: 150%;
    z-index: 99;
    background-color: #032635;
    padding-top: 40px;
    position: absolute;
    top: -20%;
    right: -5%;
  }
`;


export const MenuItem = styled.li<{ menu_active: string }>`
    padding: 15px;
    transition: all ease .5;

    a {
        text-decoration: none;
        text-decoration: ${(props) => (props.menu_active === "true" ? 'underline' : 'none')};
    }

    &:hover {
        opacity: .8;
    } 
`