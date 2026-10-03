import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    min-height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text);
    border-bottom: 1px solid var(--line);
    position: relative;

    .logo,
    .menu {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .logo {
        h1 {
            font-size: 1.2rem;
            letter-spacing: -.04em;
        }
    }

    @media (max-width: 900px) {
        min-height: 72px;
        
        .logo {
            width: 70%;
            h1 {
                font-size: 1.05rem;
            }
        }
    }
`

