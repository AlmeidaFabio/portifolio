import styled from "styled-components";

export const GridItem = styled.article`
  min-width: 0;
`;

export const Card = styled.div`
  height: 100%;
  min-height: 420px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: linear-gradient(155deg, rgba(18,38,52,.92), rgba(10,24,34,.96));
  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
  &:hover { transform: translateY(-4px); border-color: rgba(112,225,193,.42); box-shadow: 0 18px 45px rgba(0,0,0,.2); }
  .project-name { margin: 16px 2px 8px; font-size: 1.18rem; letter-spacing: -.025em; }
  .alert { display: none; }
  @media (max-width: 650px) { min-height: 0; }
`;

export const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #152a35;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  color: var(--muted);
  p { font-size: .86rem; line-height: 1.65; }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .tags span { padding: 4px 9px; border-radius: 99px; color: #a8e9d7; background: rgba(112,225,193,.09); font-size: .67rem; font-weight: 600; }
  .buttons { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: 4px; }
  .buttons a { padding: 8px 12px; border-radius: 9px; background: var(--surface-raised); border: 1px solid var(--line); color: var(--text); font-size: .76rem; font-weight: 600; transition: color .2s ease, border-color .2s ease; }
  .buttons a:hover { color: var(--accent); border-color: rgba(112,225,193,.4); }
`;
