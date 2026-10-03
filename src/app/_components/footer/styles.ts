import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    min-height: 56px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    font-size: .72rem;
    color: #81939f;
    border-top: 1px solid var(--line);
    margin-top: auto;

    @media (max-width: 900px) {
        min-height: 52px;
        font-size: .7rem;
        justify-content: space-between;
    }
`
