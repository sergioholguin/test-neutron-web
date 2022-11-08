import Card from './Card'
import  {carrouselImages} from '../../data/Carousel'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
    return (
        <>
            <Swiper  modules={[Navigation,Autoplay]}
                     autoplay={{
                         delay: 4000,
                         disableOnInteraction: false
                     }}
                     navigation
                     className="mySwiper"
                     breakpoints={{
                         0: {
                             slidesPerView: 1,
                             spaceBetween: 10,
                         },
                         640: {
                             slidesPerView: 2,
                             spaceBetween: 10,
                         },
                         768: {
                             slidesPerView: 3,
                             spaceBetween: 10,
                         },
                         1024: {
                             slidesPerView: 4,
                             spaceBetween: 10,
                         },
                     }}
                    >
                {carrouselImages.map((image)=> (
                    <SwiperSlide key={image.id} >
                        <Card  source={image.source} name={image.name}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel