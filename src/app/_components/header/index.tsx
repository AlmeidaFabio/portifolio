"use client"

import { Navbar } from '../navbar'
import * as Styles from './styles'

export const Header = () => {
    return (
        <Styles.Header>
            <div className="logo">
                <h1>Fábio Almeida</h1>
            </div>
            <div className="menu">
                <Navbar />
            </div>
        </Styles.Header>
    )
}