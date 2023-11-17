import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 70px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    text-shadow: 2px 2px 4px #000000;
    border-bottom: 1px solid gray;

    .logo,
    .menu {
        width: 50%;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 2.7rem;
        }
    }

    .menu {
    }

    @media (max-width: 900px) {
        height: 50px;
        
        .logo {
            width: 70%;
            h1 {
                font-size: 1.7rem;
            }
        }

        .menu {
            display: flex;
            justify-content: flex-start;
            padding-left: 40px;
        }
    }
`

