"use client"

import { Template } from '@/components/Template';
import * as Styles from '../../../styles/about.styles'
import Link from "next/link";

export default function About() {
    return (
        <Template>
            <title>Fábio Almeida | Sobre</title>
            <Styles.AboutContainer>
                <h2>Olá, eu sou o Fábio, seja bem vindo ao meu Portifólio!</h2>
                <p>
                    <strong>Minhas habilidades e conhecimentos incluem:</strong>
                </p>
                <p>
                    Conhecimentos sólidos em HTML, CSS e Javascript, com suas tecnologias e frameworks como ReactJs, NodeJs, Next.js e Typescript. Permitindo-me criar páginas web atraentes e interativas, com soluções simples e eficazes.
                </p>
                <p>
                    Compreendo os conceitos fundamentais de bancos de dados e tenho conhecimento prático em SQL para manipulação de dados
                </p>
                <p>
                    Minha <Link href="/education">formação</Link> me equipou com habilidades analíticas sólidas, permitindo-me abordar desafios complexos de maneira estruturada e eficaz.
                </p>
                <p>
                    Estou sempre disposto a aprender com os outros. Trabalho bem em equipe e estou aberto a feedback para melhorar constantemente.
                </p>
                <p>
                    Embora minha experiência profissional seja limitada, dediquei tempo a <Link href="/projects">projetos</Link> pessoais que demonstram meu entusiasmo pela programação e minha capacidade de aprender de forma autônoma.
                </p>
                <p>
                    Estou ansioso para continuar minha jornada na programação e estou aberto a oportunidades que me permitam crescer e contribuir para projetos desafiadores.
                </p>
                <p>
                    Se você está em busca de um programador comprometido com o aprendizado contínuo e disposto a trabalhar duro para atingir metas, estou pronto para colaborar.
                </p>
                <p>
                    Sinta-se à vontade para entrar em <Link href="/contact">contato</Link> comigo, estou ansioso para a oportunidade de aprender e crescer junto com sua equipe.
                </p>

                <h4>Obrigado por visitar meu portifólio!</h4>
            </Styles.AboutContainer>
        </Template>
    )
}