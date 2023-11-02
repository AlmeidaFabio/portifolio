import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'

export const AnimatedSocialMediaButtons = () => {
    return (
        <Styles.ButtonsContainer>
            <Link href="https://www.linkedin.com/in/almeidafabioo/" target='blank' className="circle">
                <Image
                    src="/assets/imgs/linkedin.png"
                    alt='ícone do Linkedin'
                    width={50}
                    height={50}
                    priority
                />
            </Link>
            <Link href="https://github.com/AlmeidaFabio" target='blank' className="circle2">
                <Image
                    src="/assets/imgs/github.png"
                    alt='ícone do Github'
                    width={50}
                    height={50}
                    priority
                />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=5598987534423" target='blank' className="circle">
                <Image
                    src="/assets/imgs/whatsapp.png"
                    alt='ícone do Whatsapp'
                    width={50}
                    height={50}
                    priority
                />
            </Link>
        </Styles.ButtonsContainer>
    )
}