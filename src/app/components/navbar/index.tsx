import Link from 'next/link'
import * as Styles from './styles'
import { navigationsLinksData } from '@/data/navigationsLinksData'
import { usePathname } from 'next/navigation'
import { StyleSheetManager } from 'styled-components'
import { useState } from 'react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const pathname = usePathname()
    
    return (
        <Styles.NavBar>
            <Styles.MenuIcon onClick={toggleMenu} >
                <Styles.Bar></Styles.Bar>
                <Styles.Bar></Styles.Bar>
                <Styles.Bar></Styles.Bar>
            </Styles.MenuIcon>
            <Styles.MenuItems open={isOpen}>
                <StyleSheetManager shouldForwardProp={(prop) => prop !== 'menu_active'}>
                    {navigationsLinksData.map((item, index) => (
                        <Styles.MenuItem key={index} menu_active={pathname === item.path ? "true" : "false"}>
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </Styles.MenuItem>
                    ))}
                </StyleSheetManager>
            </Styles.MenuItems>
        </Styles.NavBar>
    )
}