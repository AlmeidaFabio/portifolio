import styled from "styled-components";

export const CardArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    .square {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 28px;
        overflow: hidden;

        img {
            border-radius: 28px;
            object-fit: cover;
            object-position: center top;
        }
    }

    @media (max-width: 900px) {
        img {
            width: 280px;
            height: 320px;
        }
    }

    @media (max-width: 780px) {
        .square img { width: 250px; height: 300px; }
    }
    
`
