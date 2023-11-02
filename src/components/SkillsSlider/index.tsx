import { coursesData } from '../../data/coursesData'
import * as Styles from './styles'
import Image from 'next/image';

export const SkillsSlider = () => {
    return (
        <Styles.Slider>
            <Styles.LogosSlide>
                {coursesData.map(course => (
                    <Styles.SlideItem key={course.id}>
                        <Image src={course.imageUrl} alt={course.name} width={80} height={60} priority />

                        <span>{course.name}</span>
                    </Styles.SlideItem>
                ))}
            </Styles.LogosSlide>
            <Styles.LogosSlide>
                {coursesData.map(course => (
                    <Styles.SlideItem key={course.id}>
                        <Image src={course.imageUrl} alt={course.name} width={80} height={60} priority />

                        <span>{course.name}</span>
                    </Styles.SlideItem>
                ))}
            </Styles.LogosSlide>
        </Styles.Slider>
    )
}