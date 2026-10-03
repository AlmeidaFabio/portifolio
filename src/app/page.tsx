import Link from 'next/link'
import { AnimatedCard } from './_components/animatedCard'
import { AnimatedSocialMediaButtons } from './_components/animatedSocialMediaButtons'
import { SkillsSlider } from './_components/skillsSlider'
import * as Styles from './styles/page.styles'

const Home = () => (
  <Styles.Main>
    <Styles.LeftSide>
      <div className="eyebrow"><span className="status-dot" /> Desenvolvedor Full Stack</div>
      <h2>Olá, eu sou <span>Fábio Almeida.</span></h2>
      <p className="lead">Transformo ideias em experiências digitais funcionais e intuitivas.</p>
      <p className="description">Sou formado em Análise e Desenvolvimento de Sistemas e gosto de construir aplicações web com foco em qualidade, clareza e aprendizado contínuo. Aqui você encontra um pouco do que venho estudando e criando.</p>
      <div className="actions">
        <Link className="primary-action" href="/projects">Conheça meus projetos <span aria-hidden="true">↗</span></Link>
        <Link className="secondary-action" href="/about">Mais sobre mim</Link>
      </div>
      <div className="skills-area">
        <span className="skills-label">TECNOLOGIAS COM QUE TRABALHO</span>
        <SkillsSlider />
      </div>
    </Styles.LeftSide>
    <Styles.RigthSide>
      <div className="portrait-frame"><AnimatedCard /><span className="portrait-note">Curioso por tecnologia · Sempre aprendendo</span></div>
      <AnimatedSocialMediaButtons />
    </Styles.RigthSide>
  </Styles.Main>
)

export default Home
