import { useContext } from "react";
import Image from "next/image";
import {GalleryCarousel, GalleryCarouselContext,} from "../Gallery";

interface Image {
    id: number;
    img_number: number;
    name: string;
    source: string;
}

interface Props {
    images: Image[];
}

const GallerySection = ( { images }: Props) => {
    const { gallery, openGallery } = useContext(GalleryCarouselContext);

    return (
        <div className="bg-white px-[20px] py-[40px] md:px-[30px] md:py-[50px] lg:px-[0px] lg:py-[60px]">
            <div className={`bg-white p-[10px] gap-[23px] grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 max-w-[1100px] m-auto`}>
                {images.map((image: any) => (
                    <figure
                        key={image.id}
                        className={`border-8 border-gray-200 border-solid m-0 aspect-w-3 aspect-h-2`}
                        onClick={() => {openGallery(image.id)}}
                    >
                        <Image
                            src={image.source}
                            layout="fill"
                            objectFit="cover"
                            alt={image.name}
                        />
                    </figure>
                ))}
            </div>
            <div className={gallery ? 'visible' : 'invisible transition-[visibility] delay-100 duration-0'}>
                <GalleryCarousel slides={images} />
            </div>
        </div>
    );
};

export default GallerySection;
