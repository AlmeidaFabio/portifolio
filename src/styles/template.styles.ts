import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100%;
    min-height: calc(100vh - 40px); 
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
    background: #16384c;
    color: whitesmoke;
`

export const Header = styled.header`
    width: 100%;
    height: 70px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: whitesmoke;
    text-shadow: 2px 2px 4px #000000;
    border-bottom: 1px solid gray;

    h1 {
        font-size: 2.5rem;
    }

`

export const NavBar = styled.nav`
    height: 60px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;
        display: flex;

        li {
            margin-left: 5px;
            margin-right: 5px;
            padding: 10px;
            height: 60px;
            line-height: 40px;
            transition: all ease .5;

            a {
                text-decoration: none;
            }

            &:hover {
                opacity: .8;
                text-decoration: underline;
            }    
        }
    }
`

export const Footer = styled.footer`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: .8rem;
    color: gray;
`