import styled from "styled-components";

export const Container = styled.main`
  width: 100%; padding: 62px 0 76px;
  h3 { margin-bottom: 12px; color: var(--text); font-size: 1rem; }
  .page-heading { max-width: 650px; margin: 0 0 28px; }
  .page-heading span { color: var(--accent); font-size: .68rem; font-weight: 700; letter-spacing: .15em; }
  .page-heading h2 { margin-top: 8px; color: var(--text); font-size: clamp(2rem, 4vw, 3rem); line-height: 1.15; letter-spacing: -.05em; }
  .page-heading p { margin-top: 10px; color: var(--muted); }
  @media(max-width: 900px) { padding: 48px 0 64px; }
`;
export const MainArea = styled.div`
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px;
  @media(max-width: 850px) { grid-template-columns: 1fr; }
`;
export const Education = styled.section`
  padding: 26px; display: flex; flex-direction: column; gap: 22px;
  border: 1px solid var(--line); border-radius: 20px; background: var(--surface); color: var(--muted);
  p { margin: 9px 0; font-size: .88rem; }
  .perfil-image { width: 104px; height: 104px; overflow: hidden; border-radius: 24px; border: 1px solid var(--line); background: var(--surface-raised); }
  .perfil-image img { width: 100%; height: 100%; object-fit: cover; }
  a { color: var(--accent); border-bottom: 1px solid rgba(112,225,193,.35); }
  @media(max-width: 850px) { padding: 22px; }
`;
export const Skills = styled.section`
  padding: 26px; display: flex; flex-direction: column; gap: 22px;
  border: 1px solid var(--line); border-radius: 20px; background: var(--surface); color: var(--muted);
  p { padding: 5px 0; font-size: .85rem; }
  .hard-skills, .learning, .soft-skills { width: 100%; }
  .hard-skills .slider { width: 100%; }
  .hard-skills .slider > div { height: 76px; }
  @media(max-width: 850px) { padding: 22px; }
`;
export const Button = styled.div`
  margin-top: 24px;
  a { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 18px; border-radius: 12px; background: var(--accent); color: #07131d; font-size: .86rem; font-weight: 700; transition: transform .2s ease, background .2s ease; }
  a:hover { transform: translateY(-2px); background: #94efd7; }
`;
