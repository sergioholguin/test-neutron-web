import Image from 'next/image';
import styles from '../../styles/components/Slider.module.scss';

interface Slide {
    title: string;
    description: string;
    img: string;
}

interface Props {
    activeIndex: number;
    sliderImages: Slide[];
}

const SliderContent = ({ activeIndex, sliderImages }: Props) => {
    return (
        <section>
            {sliderImages.map((slide, slideIndex) => (
              <div key={slideIndex} className={slideIndex === activeIndex ? styles.slider_container_slide_active : styles.slider_container_slide_inactive}>
                  <Image className={styles.slider_container_slide_image} layout='fill' objectFit='cover'  quality={100} src={slide.img} alt={slide.title}/>
                  <h2 className={styles.slider_container_slide_title}>{slide.title}</h2>
                  <h3 className={styles.slider_container_slide_text}>{slide.description}</h3>
              </div>
            ))}
        </section>
    )
}

export default SliderContent;
