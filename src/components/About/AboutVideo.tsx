import Image from "next/image";

const background = 'https://www.nidolittlevilla.com/wp-content/uploads/2019/07/bg_seccion-dos-home.jpg'
const video = "https://www.youtube.com/embed/1pJNnmc21ZU"


const AboutInfo = () => {
    return (
        <div className="bg-fixed" style={{backgroundImage: `url(${background})`}}>
            <div className="flex flex-col bg-transparent p-[40px] m-auto items-center lg:flex-row lg:px-[30px] lg:py-[50px] lg:max-w-[1100px]">
                <div className="box-border w-full p-[10px] order-last lg:order-first lg:max-w-[530px]">
                    <div className="mx-auto my-[10px] aspect-w-16 aspect-h-9 w-full">
                        <iframe src={video}></iframe>
                    </div>
                </div>
                <div className="m-[10px] pb-[0px] text-gray-500 leading-7 lg:p-[20px] lg:w-1/2 text-[14px] lg:text-[16px]">
                    <h2 className="text-[#55509f] text-[22px] lg:text-[30px] font-semibold">
                        Entrevista de CNN al Nido Little Villa
                    </h2>
                    <p className="text-justify">
                        Ante las interrogantes: ¿Preparamos a nuestros pequeños
                        con las habilidades necesarias para afrontar los retos
                        educacionales del presente siglo? ¿Cuáles son los
                        factores que hacen de la etapa preescolar una
                        experiencia invaluable para el pequeño y para los padres
                        también?
                    </p>
                    <p className="text-justify">
                        Vea la entrevista y el reportaje realizado por la cadena
                        internacional de noticias CNN a nuestro Nido
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;
