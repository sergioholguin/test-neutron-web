import {useEffect, useState} from "react";
import styles from '../../styles/components/Slider.module.scss';
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import {sliderImages} from "../../data/Slider";

const Slider = () => {
    const [activeIndex, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(activeIndex === sliderImages.length - 1 ? 0 : activeIndex + 1)
        }, 5000)
        return () => clearInterval(interval);
    }, [activeIndex])

    const prevSlide = () => {
        setActive(activeIndex > 0 ? activeIndex - 1 : activeIndex)
    }
    const nextSlide = () => {
        setActive(activeIndex < sliderImages.length - 1 ? activeIndex + 1 : activeIndex)
    }
    const changeSlide = (activeIndex: number) => setActive(activeIndex)

    return (
        <div className={styles.slider_container}>
            <SliderContent activeIndex={activeIndex} sliderImages={sliderImages}/>
            <div className={styles.slider_container_arrows}>
                <div className={styles.slider_container_arrows_prev} onClick={prevSlide}>
                    &#10094;
                </div>
                <div className={styles.slider_container_arrows_next} onClick={nextSlide}>
                    &#10095;
                </div>
            </div>
            <Dots activeIndex={activeIndex} sliderImages={sliderImages}
                  changeSlide={changeSlide}/>
        </div>
    )
}

export default Slider