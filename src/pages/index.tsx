import Image from "next/image";
import ServicesPreview from "../components/ServicesPreview";
import ButtonInfo from "../components/ButtonInfo";
import Carousel from "../components/Carousel/Carousel";
import Slider from "../components/Slider/Slider";

const Home = () => {
    return (
        <>
            <Slider/>
            <div className="container mx-auto w-4/5	md:max-w-[1100px] my-10 md:my-12">
                <div className="flex md:flex-row items-center justify-center flex-col ">
                    <div className="md:w-3/5 flex flex-col items-center md:items-start ">
                        <p className="text-[14px] md:text-[16px] text-justify text-[#7a7a7a]">PROMITIA WAS HERE AGAIN</p>
                        <p className="text-[14px] md:text-[16px] text-justify  text-[#7a7a7a] "><b>Little Villa</b> aporta activamente a la educación, buscando
                            permanentemente nuevas miradas de acercamiento a la primera infancia a través de
                            la reflexión y el cuestionamiento crítico, con el fin de brindar las mejores condiciones
                            educativas.</p>
                        <div className="mb-5 md:mb-5">
                            <ButtonInfo route="about" title="LEER MÁS" />
                        </div>
                    </div>
                    <div className="md:w-2/5 md:flex md:justify-end  ">
                        <Image src="/images/home/quienes-somos.jpg"  width="420" height="300"  alt="quienes-somos"/>
                    </div>
                </div>
                <ServicesPreview/>
            </div>
            <Carousel/>
        </>
    );
};

export default Home
