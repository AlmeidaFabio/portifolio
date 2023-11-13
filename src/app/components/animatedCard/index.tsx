import Image from 'next/legacy/image'
import * as Styles from './syles'

export const AnimatedCard = () => {
    return (
        <Styles.CardArea>
            <div className="square">
                <Image
                    src="/assets/imgs/perfil.png"
                    alt='imagem de perfil'
                    width={350}
                    height={400}
                    priority
                />
            </div>
        </Styles.CardArea>
    )
}