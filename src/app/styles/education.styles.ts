import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const MainArea = styled.main`
  width: 100%;
  display: flex;
  text-shadow: 1px 1px 2px #000000;

  h3 {
    margin: 10px 0;
    text-decoration: underline;
    font-style: italic;
  }

  p {
    padding: 10px;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    p {
      padding: 10px 0;
    }
  }
`;

export const Education = styled.section`
  width: 50%;
  height: 100%;
  min-height: calc(100vh - 200px);
  padding: 20px;
  display: flex;
  flex-direction: column;

  .perfil-image {
    border-radius: 50%;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: gray;

    img {
      border-radius: 50%;
    }
  }

  a {
    text-decoration: underline;
    font-style: italic;
    transition: all ease .5s;

    &:hover {
      opacity: .6;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Skills = styled.section`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-left: 1px solid gray;

  .hard-skills,
  .learning,
  .soft-skills {
    margin-bottom: 30px;
    width: 100%;
  }

  .hard-skills {
    .slider {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    border: 0;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-weight: bold;
  border: 1px solid gray;
  background: transparent;
  color: inherit;
  cursor: pointer;
  align-self: center;
  transition: all ease .5s;

  &:hover {
    opacity: .6;
    border: 1px solid black;
  }

  @media (max-width: 900px) {
    width: 100px;
    height: 100px;
    font-size: 0.8rem;
  }
`;
