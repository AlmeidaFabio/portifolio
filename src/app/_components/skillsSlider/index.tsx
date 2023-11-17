import { coursesData } from '@/app/_utils/coursesData';
import * as Styles from './styles'
import Image from 'next/image';

export const SkillsSlider = () => {
    return (
        <Styles.Slider>
            <Styles.LogosSlide>
                {coursesData.map(course => (
                    <Styles.SlideItem key={course.id}>
                        <div className="image-area">
                            <Image src={course.imageUrl} alt={course.name} width={60} height={60} priority />
                        </div>

                        <span>{course.name}</span>
                    </Styles.SlideItem>
                ))}
            </Styles.LogosSlide>
            <Styles.LogosSlide>
                {coursesData.map(course => (
                    <Styles.SlideItem key={course.id}>
                        <div className="image-area">
                            <Image src={course.imageUrl} alt={course.name} width={60} height={60} priority />
                        </div>

                        <span>{course.name}</span>
                    </Styles.SlideItem>
                ))}
            </Styles.LogosSlide>
        </Styles.Slider>
    )
}