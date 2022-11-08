import Banner from "../components/Banner";
import {galleryImages} from "../data/GalleryImages";
import {GalleryCarouselContextProvider, GallerySection} from "../components/Gallery";


const Gallery = () => {
    return (
        <section className="bg-white">
            <Banner section="Galería" source="galeria" />
            <div>
                <GalleryCarouselContextProvider>
                    <GallerySection images={galleryImages}/>
                </GalleryCarouselContextProvider>
            </div>
        </section>
    );
};

export default Gallery;
