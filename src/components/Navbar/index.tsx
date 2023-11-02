import Link from 'next/link'
import * as Styles from './styles'
import { navigationsLinksData } from '@/data/navigationsLinksData'
import { usePathname } from 'next/navigation'
import { StyleSheetManager } from 'styled-components'

export const Navbar = () => {
    return (
        <Styles.NavBar>
            <ul>
                <StyleSheetManager shouldForwardProp={(prop) => prop !== 'menu_active'}>
                    {navigationsLinksData.map((item, index) => (
                        <Styles.MenuItem key={index} menu_active={usePathname() === item.path ? "true" : "false"}>
                            <Link href={item.path}>
                                {item.label}
                            </Link>
                        </Styles.MenuItem>
                    ))}
                </StyleSheetManager>
            </ul>
        </Styles.NavBar>
    )
}