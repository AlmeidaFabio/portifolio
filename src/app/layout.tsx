import './styles/globals.css'
import { Poppins } from "next/font/google"
import { Header } from './_components/header'
import Footer from './_components/footer'
import StyledComponentsRegistry from './libs/registry'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: 'Fábio Almeida | %s',
    default: 'Fábio Almeida | Desenvolvedor Full Stack',
  },
  description: 'Desenvolvedor Full Stack com foco em JavaScript, Node.js e React. Conheça meus projetos, habilidades e trajetória em desenvolvimento web.',
  keywords: ['Next.js', 'React', 'JavaScript','Desenvolvimento Web Full Stack', 'Node.js'],
  creator: 'Fábio Almeida',
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
interface LayoutProps { children: React.ReactNode }

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <div className='container'>
            <Header />
            {children}
            <Footer />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
