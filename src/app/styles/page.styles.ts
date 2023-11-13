import styled from "styled-components";

export const Main = styled.main`
   width : 100%;
   height: calc(100vh - 200px);
   display: flex;
   justify-content: center;
   color: whitesmoke;

   @media (max-width: 900px) {
        height: 100%;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;
    }
`

export const LeftSide = styled.section`
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .office, 
    .description {
        text-shadow: 1px 1px 2px #000000;
    }

    .office {
        display: flex;
        flex-direction: column;
        font-size: 3.3rem;
        font-weight: bold;
    }  
    
    .description {
        font-size: 1.2rem;
    }

    .slider-area {
        width: 100%;
    }

    @media (max-width: 900px) {
        width: 100%;

        .office {
            font-size: 2.2rem;
            align-items: center;
            margin-bottom: 20px;
        }

        .description {
            font-size: .9rem;
            margin-bottom: 20px;
        }
    }
`

export const RigthSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding-top: 50px;

    @media (max-width: 900px) {
        width: 100%;
        padding: 20px;
        height: 600px;
        align-items: center;
    }
`