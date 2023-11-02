import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 160px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 70px 10px 20px 10px;
  position: relative;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 70px 10px 20px 10px;
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 70px 0 10px 0;
  }
`;
