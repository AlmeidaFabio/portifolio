import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 240px);
    margin-top: 50px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    text-shadow: 1px 1px 2px #000000;

    h2 {
        align-self: center;
        margin-bottom: 30px;
    }

    p {
        margin: 10px 0;
    }

    a {
        text-decoration: underline;
        font-style: italic;
        transition: all ease .5s;

        &:hover {
            opacity: .6;
        }
    }

    h4 {
        margin-top: 30px;
        align-self: center;
    }
`