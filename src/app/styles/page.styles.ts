import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
  width: 100%;
  min-height: min(760px, calc(100vh - 130px));
  display: grid;
  grid-template-columns: 1.12fr .88fr;
  align-items: center;
  gap: clamp(32px, 7vw, 100px);
  padding: 64px 4px 76px;
  color: var(--text);

  @media (max-width: 850px) { grid-template-columns: 1fr; gap: 28px; padding: 54px 0; }
`

export const LeftSide = styled.section`
  max-width: 670px;
  .eyebrow { display: flex; align-items: center; gap: 10px; color: var(--accent); font-size: .82rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
  .status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 16px rgba(112,225,193,.65); }
  h2 { margin: 22px 0 10px; font-size: clamp(2.7rem, 5.6vw, 5rem); letter-spacing: -.065em; line-height: 1.08; }
  h2 span { color: var(--accent); }
  .lead { max-width: 600px; color: #dbe6ec; font-size: clamp(1.1rem, 1.8vw, 1.4rem); line-height: 1.55; }
  .description { max-width: 590px; margin-top: 18px; color: var(--muted); font-size: .98rem; }
  .actions { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; margin-top: 30px; }
  .actions a { min-height: 48px; padding: 11px 18px; border-radius: 12px; font-size: .9rem; font-weight: 600; transition: transform .2s ease, background .2s ease; }
  .actions a:hover { transform: translateY(-2px); }
  .primary-action { display: flex; align-items: center; gap: 14px; color: #07131d; background: var(--accent); }
  .primary-action:hover { background: #94efd7; }
  .primary-action span { font-size: 1.2rem; }
  .secondary-action { border: 1px solid var(--line); color: var(--text); }
  .secondary-action:hover { background: var(--surface-raised); }
  .skills-area { margin-top: 50px; }
  .skills-label { display: block; margin-bottom: 12px; color: #8497a3; font-size: .67rem; font-weight: 600; letter-spacing: .13em; }
  @media(max-width: 850px) { .skills-area { margin-top: 34px; } }
  @media(max-width: 540px) { h2 { font-size: 2.7rem; } .description { font-size: .9rem; } }
`

export const RigthSide = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .portrait-frame { position: relative; width: min(100%, 430px); min-height: 470px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--line); border-radius: 32px; background: radial-gradient(ellipse at 50% 36%, rgba(112,225,193,.13), transparent 55%), linear-gradient(150deg, #102936, #0a1822); overflow: hidden; }
  .portrait-frame::before { content: ''; position: absolute; width: 280px; height: 280px; border: 1px solid rgba(112,225,193,.14); border-radius: 50%; box-shadow: 0 0 0 32px rgba(112,225,193,.025), 0 0 0 64px rgba(112,225,193,.02); }
  .portrait-note { position: absolute; bottom: 18px; left: 18px; right: 18px; padding: 10px 14px; border: 1px solid var(--line); border-radius: 12px; background: rgba(7,19,29,.72); color: #c2d0d7; text-align: center; font-size: .76rem; backdrop-filter: blur(10px); }
  @media (max-width: 850px) { .portrait-frame { min-height: 370px; max-width: 390px; } }
`
