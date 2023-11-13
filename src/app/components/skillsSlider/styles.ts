import styled, { keyframes } from 'styled-components'

const slideShown = keyframes`
   
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`

export const Slider = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    border-radius: 20px;    
    background: whitesmoke;
    box-shadow: 0 10px 20px -10px rgba(0,0,0,0.2);
    display: flex;
    overflow: hidden;

    &:before,
    &:after {
        position: absolute;
        top: 0;
        width: 100px;
        height:100%;
        content: '';
        z-index: 2;
    }

    &:before {
        left: 0;
        background: linear-gradient(to left, rgba(255,255,255,0), white);
    }

    &:after {
        right: 0;
        background: linear-gradient(to right, rgba(255,255,255,0), white);
    }
` 

export const LogosSlide = styled.div`   
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    animation: ${slideShown} 10s linear infinite;
`

export const SlideItem = styled.div`   
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 2px;
    text-shadow: 2px 2px 3px #000000;

    .image-area {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`