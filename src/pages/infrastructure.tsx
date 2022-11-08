import Banner from "../components/Banner";
import {GalleryCarouselContextProvider} from "../components/Gallery";
import {GallerySection} from "../components/Infrastructure";
import {infrastructureImages} from "../data/InfrastructureImages";
import {InfrastructureDescription } from "../components/Infrastructure"


const Infrastructure = () => {
    return (
        <section className="bg-white">
            <Banner section="Infraestructura" source="infraestructura" />
            <div>
                <InfrastructureDescription />
                <GalleryCarouselContextProvider>
                    <GallerySection images={infrastructureImages}/>
                </GalleryCarouselContextProvider>
            </div>
        </section>
    );
};

export default Infrastructure;
