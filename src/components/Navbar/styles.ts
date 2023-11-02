import styled from "styled-components"


export const NavBar = styled.nav`
    height: 60px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;
        display: flex;

        @media (max-width: 900px) {
            li {
                padding: 5px;
            }

            display: none;
        }
    }
`
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