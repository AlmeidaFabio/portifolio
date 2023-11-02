import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100%;
    min-height: calc(100vh - 40px); 
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
    background: #16384c;
    color: whitesmoke;

    @media (max-width: 900px) {
        padding: 10px;
        margin: 10px;
    }
`
export const Footer = styled.footer`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: .8rem;
    color: gray;

    @media (max-width: 900px) {
        height: 30px;
        font-size: .7rem;
        justify-content: center;
    }
`
