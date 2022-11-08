import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {useContext} from "react";
import {GalleryCarouselContext} from "./GalleryCarouselContext";

import "swiper/css";
import "swiper/css/navigation";


const SwiperJS = ({slides, prevRef, nextRef }: any) => {
    const { setSwiperInstance } = useContext(GalleryCarouselContext);

    const handleClick = (e: any) => {
        e.stopPropagation()
    }

    return (
        <Swiper
            onSwiper={setSwiperInstance}
            // install Swiper modules
            modules={[Navigation]}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            speed={300}
            slidesPerView={1}
            loop
            className="w-[100%] h-[100%]"
        >
            {slides.map((slide: any) => (
                <SwiperSlide key={slide.id}>
                    <div className="flex items-center w-[100%] h-[100%] p-[40px] box-border m-auto max-w-[648px] md:px-[80px] md:py-[70px] md:max-w-[728px]">
                        <div className="w-[100%] m-0 swiper-zoom-container" onClick={(e)=>{handleClick(e)}}>
                            <figure className={`w-full m-0 aspect-w-3 aspect-h-2`}>
                                <Image
                                    src={slide.source}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={slide.name}
                                />
                            </figure>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default SwiperJS;
