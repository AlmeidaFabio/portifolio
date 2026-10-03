import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;

    .circle,
    .circle2 {
        width: 52px;
        height: 52px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        margin: 0;
        align-items: center;        
        z-index: 9;
        cursor: pointer;
        background: var(--surface-raised);
        border: 1px solid var(--line);
        transition: transform .2s ease, border-color .2s ease;

        &:hover {
            transform: translateY(-3px);
            border-color: rgba(112,225,193,.55);
        }
    }

    .circle {
        animation: none;
    }
    .circle2 { 
        animation: none;
    }
`
