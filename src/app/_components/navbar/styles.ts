import styled from "styled-components"

export const NavBar = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const MenuIcon = styled.button`
    cursor: pointer;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 24px;
    background-color: transparent;
    border: none;
    outline: none;
    transition: opacity .2s ease;
    background: transparent;
    border: 0;

    @media(max-width: 900px) { display: flex; }

    &:hover {
        opacity: .8;
    }
`

export const Bar = styled.div<{ open: boolean}>`
    width: 100%;
    height: 4px;
    transition: 0.4s;
    background-color: var(--accent);
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
    transition: opacity .2s ease;
    border: 0;

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
    width: min(300px, calc(100vw - 32px));
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    gap: 6px;
    z-index: 99;
    background-color: var(--surface-raised);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 52px 16px 16px;
    box-shadow: 0 24px 60px rgba(0,0,0,.4);
    position: absolute;
    top: 72px;
    right: 0;
  }
`;


export const MenuItem = styled.li<{ menu_active: string }>`
    padding: 8px 12px;
    border-radius: 10px;
    transition: background .2s ease, color .2s ease;
    background: ${(props) => (props.menu_active === "true" ? 'rgba(112, 225, 193, .1)' : 'transparent')};
    color: ${(props) => (props.menu_active === "true" ? 'var(--accent)' : 'var(--muted)')};

    a {
        text-decoration: none;
    }

    &:hover {
        background: rgba(112, 225, 193, .08);
        color: var(--text);
    } 
`
