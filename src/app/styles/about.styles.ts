import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    max-width: 850px;
    min-height: calc(100vh - 180px);
    margin: 0 auto;
    padding: 70px 0;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: var(--muted);

    h2 {
        margin-bottom: 24px;
        color: var(--text);
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.2;
        letter-spacing: -.05em;
    }

    p {
        margin: 12px 0;
        max-width: 740px;
    }

    a {
        color: var(--accent);
        border-bottom: 1px solid rgba(112,225,193,.35);
        transition: color .2s ease;

        &:hover {
            color: #b3f3e2;
        }
    }

    h4 {
        margin-top: 28px;
        color: var(--text);
    }

    @media(max-width: 900px) {
        padding: 50px 0;
        font-size: .9rem;
    }
`
