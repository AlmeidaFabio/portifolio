import './styles/globals.css'
import { Poppins } from "next/font/google"
import { Header } from './_components/header'
import Footer from './_components/footer'
import StyledComponentsRegistry from './libs/registry'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: 'Fábio Almeida | %s',
    default: 'Fábio Almeida - Web Developer | Portifólio',
  },
  description: 'Desenvolvedor Full Stack com expertise em JavaScript, Node.js e React. Explore meu portfólio para ver projetos inovadores e soluções web eficientes.',
  keywords: ['Next.js', 'React', 'JavaScript','Desenvolvimento Web Full Stack', 'Node.js'],
  creator: 'Fábio Almeida',
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })
interface LayoutProps {
  types: string;
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ types, children }) => {
  return (
    <html lang="en">
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
