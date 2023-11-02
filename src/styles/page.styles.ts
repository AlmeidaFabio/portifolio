import styled from "styled-components";

export const Main = styled.main`
   width : 100%;
   height: calc(100vh - 200px);
   display: flex;
   color: whitesmoke;

   @media (max-width: 900px) {
        height: 100%;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;
    }
`

export const LeftSide = styled.section`
    padding: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;

    .office, 
    .description {
        text-shadow: 1px 1px 2px #000000;
    }

    .office {
        display: flex;
        flex-direction: column;
        font-size: 40px;
        font-weight: bold;
    }  
    
    .description {
        max-width: 550px;
    }

    @media (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;

        .office {
            font-size: 32px;
            align-items: center;
            margin-bottom: 20px;

        }

        .description {
            max-width: 100%;
            margin-bottom: 20px;
        }
    }
`

export const RigthSide = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding-top: 30px;

    @media (max-width: 900px) {
        padding-top: 20px;
        height: 600px;
        align-items: center;
    }
`