import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: .8rem;
    color: gray;

    @media (max-width: 900px) {
        height: 30px;
        font-size: .7rem;
        justify-content: center;
    }
`