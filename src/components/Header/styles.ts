import styled from "styled-components"

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

    @media (max-width: 900px) {
        height: 50px;
        h1 {
            font-size: 1.8rem;
        }
    }
`

