import styled, { keyframes } from 'styled-components'

const animateCircle1 = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(55%);
    }
    75% {
        transform: translateY(25%);
    }
    100% {
        transform: translateY(0);
    }

`
const animateCircle2 = keyframes`
    0% {
        transform: translateY(55%);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(25%);
    }
    100% {
        transform: translateY(55%);
    }

`

export const ButtonsContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    .circle,
    .circle2 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        margin: 0 5px;
        align-items: center;        
        z-index: 9;
        cursor: pointer;
        background: whitesmoke;

        &:hover {
            opacity: .6;
        }
    }

    .circle {
        top: 0%;
        animation: ${animateCircle1} 3s linear infinite;
    }
    .circle2 { 
        bottom: 0%;
        animation: ${animateCircle2} 3s linear infinite;
    }
`