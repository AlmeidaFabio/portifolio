import styled from "styled-components";

export const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 520px;
`;

export const Card = styled.div`
    position: relative;
    max-width: 300px;
    height: 215px;
    background: whitesmoke;   
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;

    .alert,
    .project-name {
        z-index: 99;
        width: 86%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
    }

    .alert {
        margin-top: -75px;
        font-size: .6rem;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .project-name {
        margin-top: 20px;
        margin-bottom: 30px;
        color: #000;
    }

    &:hover {
        height: 520px;
    }
`

export const ImageBox = styled.div`
    position: relative;
    width: 260px;
    height: 220px;
    top: -60px;
    box-shadow: 0 5px 202px rgba(0, 0, 0, 0.2);
    background: gray;

    img {
        border-radius: 4px;
    }
`

export const Content = styled.div`
    width: 300px;
    position: relative;
    margin-top: -140px;   
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;

    .tags {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: greenyellow;
        color: gray;
        border-radius: 5px;
        padding: 2px;

        span {
            font-size: .7rem;
            font-weight: bold;
            margin: 0 3px;
        }
    }

    p {
        text-align: center;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 40px;

        a {
            width: 120px;
            text-align: center;
            padding: 10px;
            border-radius: 10px;
            background: #16384c;
            color: whitesmoke;
            font-size: .8rem;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: 0.3s ease;

            &:hover {
                opacity: .7;
            }
        }
    }

    ${Card}:hover & {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
  }
`