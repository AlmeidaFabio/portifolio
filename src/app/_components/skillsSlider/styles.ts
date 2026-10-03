import styled, { keyframes } from 'styled-components'

const slideShown = keyframes`
   
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`

export const Slider = styled.div`
    position: relative;
    width: 100%;
    height: 88px;
    border-radius: 14px;
    padding: 8px 0;
    background: var(--surface);
    border: 1px solid var(--line);
    display: flex;
    overflow: hidden;

    &:before,
    &:after {
        position: absolute;
        top: 0;
        width: 54px;
        height:100%;
        content: '';
        z-index: 2;
    }

    &:before {
        left: 0;
        background: linear-gradient(to left, rgba(13,29,41,0), var(--surface));
    }

    &:after {
        right: 0;
        background: linear-gradient(to right, rgba(13,29,41,0), var(--surface));
    }
` 

export const LogosSlide = styled.div`   
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    flex: 0 0 auto;
    animation: ${slideShown} 24s linear infinite;
`

export const SlideItem = styled.div`   
    width: 86px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 2px;
    color: var(--muted);
    font-size: .66rem;

    .image-area {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
