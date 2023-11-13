import styled from 'styled-components'

export const Container = styled.div`
    width: calc(100vw - 40px);
    max-width: 1280px;
    height: 100%;
    min-height: calc(100vh - 40px); 
    padding: 20px;
    margin: 20px 0;
    border-radius: 20px;
    background: #16384c;
    color: whitesmoke;

    @media (max-width: 900px) {
        padding: 10px;
        width: calc(100vw - 20px);
        margin: 10px 0;
    }
`
