import styled, { keyframes } from "styled-components";

const animateSquare = keyframes`
    0% {
        top: 5%;
    }
    50% {
        top: 25%;
    }
    100% {
        top: 5%;
    }

`

export const CardArea = styled.div`
    width: 100%;
    height: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    position: relative;

    .square {
        align-self: center;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background: #032635;
        border-radius: 30px;
        position: absolute;
        top: 5%;
        animation: ${animateSquare} 5s linear infinite;

        img {
            border-radius: 30px;
        }
    }

    @media (max-width: 900px) {
        padding: 20px;

        img {
            width: 250px;
            height: 300px;
        }
    }

    @media (max-width: 780px) {
        .square {
            top: 10%;
        }
    }
    
`