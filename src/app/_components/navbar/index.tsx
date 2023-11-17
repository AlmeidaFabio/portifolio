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
                <Styles.MenuIcon onClick={toggleMenu}>
                    <Styles.Bar open={isOpen}></Styles.Bar>
                    <Styles.Bar open={isOpen}></Styles.Bar>
                    <Styles.Bar open={isOpen}></Styles.Bar>
                </Styles.MenuIcon>
                <Styles.MenuItems open={isOpen} onClick={toggleMenu}>
                    <Styles.CloseButton open={isOpen}>X</Styles.CloseButton>
                    {navigationsLinksData.map((item, index) => (
                        <Styles.MenuItem key={index} menu_active={pathname === item.path ? "true" : "false"}>

                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </Styles.MenuItem>
                    ))}
                </Styles.MenuItems>

            </StyleSheetManager>
        </Styles.NavBar>
    )
}