import styled from "styled-components"

export const NavBar = styled.nav`
    height: 60px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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

export const Bar = styled.div`
    width: 100%;
    height: 4px;
    background-color: #333;
    transition: 0.4s;
    background-color: whitesmoke;
    display: none;

    @media(max-width: 900px) {
        display: block;
    }
`

export const MenuItems = styled.ul<{ open: boolean}>`
  list-style: none;
  display: flex;
  padding: 0;
  position: relative;

  @media(max-width: 900px) {
    width: 180px;
    display: ${(props) => (props.open ? 'block' : 'none')};
    top: 230%;
    left: 2%;
    z-index: 99;
    background-color: #032635;
  }
`;


export const MenuItem = styled.li<{ menu_active: string }>`
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    height: 60px;
    line-height: 40px;
    transition: all ease .5;

    a {
        text-decoration: none;
        text-decoration: ${(props) => (props.menu_active === "true" ? 'underline' : 'none')};
    }

    &:hover {
        opacity: .8;
    } 
`