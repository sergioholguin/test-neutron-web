import React from 'react';
import styles from '../../styles/components/Slider.module.scss';

interface Slide {
    title: string;
    description: string;
    img: string;
}

interface Props {
    activeIndex: number;
    sliderImages: Slide[];
    changeSlide: (slideIndex: number) => void;
}

const Dots = ({activeIndex, changeSlide, sliderImages}: Props) => {
    return (
        <div className={styles.slider_container_dots}>
            {sliderImages.map((slide, slideIndex) => (
                <span
                    key={slideIndex}
                    className={slideIndex === activeIndex ? styles.slider_container_dots_active
                                                          : styles.slider_container_dots_inactive}
                    onClick={() => changeSlide(slideIndex)}
                >
                </span>
            ))}
        </div>
    )
}

export default Dots