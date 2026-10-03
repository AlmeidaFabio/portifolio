import Link from 'next/link';
import * as Styles from '../../styles/education.styles'
import Image from 'next/image';
import { SkillsSlider } from '@/app/_components/skillsSlider';

export default function Education() {
    return (
        <Styles.Container>
            <header className="page-heading"><span>MINHA TRAJETÓRIA</span><h2>Formação e habilidades</h2><p>Conhecimentos que venho construindo ao longo da minha jornada em tecnologia.</p></header>
            <Styles.MainArea>
                <Styles.Education>
                    <div className='perfil-image'>
                        <Image
                            src="/assets/imgs/perfil.png"
                            alt='imagem de perfil'
                            width={200}
                            height={200}
                            priority
                        />
                    </div>
                    <div className="education">
                        <h3>Acadêmico</h3>
                        <p>
                            🔸<span>Formado em Análise e Desenvolvimento de Sistemas pela faculdade Estácio, 2022.</span>
                        </p>
                    </div>
                    <div className="courses">
                        <h3>Cursos</h3>
                        <p>
                            🔸<span>Estudando desenvolvimento web desde 2019 pela plataforma de cursos online <Link href="https://b7web.com.br" target='_blank' rel="noreferrer">B7web</Link>.</span>
                        </p>
                        <p>
                            🔸<span>Já participei de alguns cursos e bootcamps da plataforma online <Link href="https://www.dio.me/" target='_blank' rel="noreferrer">Digital Innovation One - DIO</Link>.</span>
                        </p>
                        <p>
                            🔸<span>Além de consumir vários conteúdos e tutoriais do Youtube e internet em geral.</span>
                        </p>
                        <div className="languages">
                            <h3>Línguas</h3>
                            <p>
                                🔸<span>Inglês básico / intermediário.</span>
                            </p>
                        </div>
                    </div>
                </Styles.Education>
                <Styles.Skills>
                    <div className="hard-skills">
                        <h3>Hard Skills</h3>
                        <div className="slider">
                            <SkillsSlider />
                        </div>
                    </div>
                    <div className='learning '>
                        <h3>Learning...</h3>
                        <p>
                            🔸<span>Docker</span>
                        </p>
                        <p>
                            🔸<span>MongoDb</span>
                        </p>
                        <p>
                            🔸<span>Tailwind</span>
                        </p>
                        <p>
                            🔸<span>Firebase</span>
                        </p>
                    </div>

                    <div className='soft-skills'>
                        <h3>Soft Skills</h3>
                        <p>
                            🔸<span>Trabalho em Equipe: Colaboração eficaz com outros desenvolvedores, designers, e membros da equipe multidisciplinar.</span>
                        </p>
                        <p>
                            🔸<span>Aprendizado Contínuo: Disposição para aprender novas tecnologias e acompanhar as tendências em constante evolução da web.</span>
                        </p>
                        <p>
                            🔸<span>Gerenciamento de Tempo: Organização e priorização de tarefas para cumprir prazos.</span>
                        </p>
                        <p>
                            🔸<span>Comunicação: Capacidade de comunicar de forma eficaz com a equipe e os clientes.</span>
                        </p>
                        <p>
                            🔸<span>Empatia: Compreensão das necessidades dos usuários finais e a capacidade de criar soluções centradas no usuário.</span>
                        </p>
                    </div>
                </Styles.Skills>
            </Styles.MainArea>
            <Styles.Button>
                <Link href="https://drive.google.com/file/d/1MsLVY4upkKuBB-pa40osY17nKtjlp8kl/view?usp=sharing" target='_blank' rel="noreferrer">Baixar currículo ↗</Link>
            </Styles.Button>
        </Styles.Container>
    )
}
