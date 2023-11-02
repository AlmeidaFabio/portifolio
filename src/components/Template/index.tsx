import { Header } from '../Header';
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
            <Styles.Footer>@almeidafabio - 2023</Styles.Footer>
        </Styles.Container>
    )
}