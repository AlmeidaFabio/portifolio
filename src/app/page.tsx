"use client"

import { AnimatedCard } from './_components/animatedCard'
import { AnimatedSocialMediaButtons } from './_components/animatedSocialMediaButtons'
import { SkillsSlider } from './_components/skillsSlider'
import * as Styles from './styles/page.styles'

const Home = () => {
  return (
      <Styles.Main>
        <Styles.LeftSide>
          <div className='office'><span>Web Developer</span> <span>Full Stack</span></div>
          <div className="description">
            Sou recém-formado em Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e com um desejo ardente de contribuir para o mundo da programação. Embora eu possa não ter experiência profissional anterior na área, minha jornada acadêmica e projetos pessoais me permitiram adquirir habilidades valiosas que estou ansioso para compartilhar e aprimorar.
          </div>
          <div className='slider-area'>
            <SkillsSlider />
          </div>
        </Styles.LeftSide>
        <Styles.RigthSide>
          <AnimatedSocialMediaButtons />
          <AnimatedCard />
        </Styles.RigthSide>
      </Styles.Main>
  )
}

export default Home