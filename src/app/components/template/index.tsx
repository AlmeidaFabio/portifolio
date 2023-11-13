import Footer from '../footer';
import { Header } from '../header';
import * as Styles from './styles'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

export const Template = ({ children }: Props) => {
    return (
        <Styles.Container>
            <Header />
            {children}
            <Footer />
        </Styles.Container>
    )
}