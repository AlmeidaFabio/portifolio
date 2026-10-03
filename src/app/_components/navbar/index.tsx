"use client"

import Link from 'next/link'
import * as Styles from './styles'
import { usePathname } from 'next/navigation'
import { StyleSheetManager } from 'styled-components'
import { useState } from 'react'
import { navigationsLinksData } from '@/app/_utils/navigationsLinksData'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const pathname = usePathname()

    return (
        <Styles.NavBar>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'menu_active'}>
                <Styles.MenuIcon type="button" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen} onClick={toggleMenu}>
                    <Styles.Bar open={isOpen}></Styles.Bar>
                    <Styles.Bar open={isOpen}></Styles.Bar>
                    <Styles.Bar open={isOpen}></Styles.Bar>
                </Styles.MenuIcon>
                <Styles.MenuItems open={isOpen} onClick={(event) => { if ((event.target as HTMLElement).closest('a')) setIsOpen(false) }}>
                    <Styles.CloseButton type="button" aria-label="Fechar menu" open={isOpen} onClick={() => setIsOpen(false)}>×</Styles.CloseButton>
                    {navigationsLinksData.map((item, index) => (
                        <Styles.MenuItem key={index} menu_active={pathname === item.path ? "true" : "false"}>

                            <Link href={item.path} aria-current={pathname === item.path ? 'page' : undefined}>
                                {item.label}
                            </Link>
                        </Styles.MenuItem>
                    ))}
                </Styles.MenuItems>

            </StyleSheetManager>
        </Styles.NavBar>
    )
}
