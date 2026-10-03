import styled from 'styled-components';

export const Page = styled.main`
  padding: 62px 0 82px;
  header { max-width: 650px; margin: 0 0 28px; }
  header span { color: var(--accent); font-size: .68rem; font-weight: 700; letter-spacing: .15em; }
  h2 { margin-top: 8px; font-size: clamp(2rem, 4vw, 3rem); line-height: 1.15; letter-spacing: -.05em; }
  header p { margin-top: 10px; color: var(--muted); }
`

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  @media (max-width: 980px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 650px) { grid-template-columns: 1fr; }
`;
