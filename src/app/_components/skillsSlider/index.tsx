import { coursesData } from '@/app/_utils/coursesData';
import * as Styles from './styles'
import Image from 'next/image';

export const SkillsSlider = () => {
    return (
        <Styles.Slider>
            <Styles.LogosSlide>
                {coursesData.map(course => (
                    <Styles.SlideItem key={`first-${course.id}`}>
                        <div className="image-area">
                            <Image src={course.imageUrl} alt={course.name} width={44} height={44} />
                        </div>

                        <span>{course.name}</span>
                    </Styles.SlideItem>
                ))}
                {coursesData.map(course => (
                    <Styles.SlideItem key={`second-${course.id}`} aria-hidden="true">
                        <div className="image-area">
                            <Image src={course.imageUrl} alt="" width={44} height={44} />
                        </div>

                        <span>{course.name}</span>
                    </Styles.SlideItem>
                ))}
            </Styles.LogosSlide>
        </Styles.Slider>
    )
}
