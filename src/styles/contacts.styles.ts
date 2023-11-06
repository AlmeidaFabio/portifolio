import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const FormArea = styled.div`
    width: 100%;
    padding: 0 20px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        input,
        button,
        textarea {
            width: 100%;
            max-width: 600px;
            padding: 10px;
            margin: 10px 0;
            border-radius: 10px;
            font-size: 1.1rem;
            outline: 0;
        }

        textarea {
            min-height: 300px;
        }

        button {
            cursor: pointer;
            transition: all ease .5s;

            &:hover {
                opacity: .7;
            }
        }

        @media (max-width: 900px) {
            height: 100%;
            margin: auto;
        }
    }
`
export const ButtonsLinksArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`