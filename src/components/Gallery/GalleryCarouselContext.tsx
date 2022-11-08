import { createContext, useState } from "react";
import SwiperCore from "swiper";

type TypeGalleryCarouselContext = {
    gallery: boolean;
    showGallery: () => void;
    openGallery: (current_image: number) => void;
    setSwiperInstance: any,
};

const defaultValue = {
    gallery: false,
};

export const GalleryCarouselContext = createContext<TypeGalleryCarouselContext>(
    defaultValue as TypeGalleryCarouselContext
);

export function GalleryCarouselContextProvider(props: any) {
    const [gallery, setGallery] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

    const showGallery = () => {
        setGallery(!gallery);
    };

    const openGallery = (current_image: any) => {
        swiperInstance?.slideTo(current_image + 1, 0);
        showGallery();
    };

    return (
        <GalleryCarouselContext.Provider
            value={{
                gallery,
                showGallery,
                openGallery,
                setSwiperInstance,
            }}
        >
            {props.children}
        </GalleryCarouselContext.Provider>
    );
}
