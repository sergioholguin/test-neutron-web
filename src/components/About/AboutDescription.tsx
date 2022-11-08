import Image from "next/image";

const AboutInfo = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col bg-white px-[20px] py-[40px] m-auto items-center md:flex-row md:px-[30px] md:py-[50px] md:max-w-[1100px]">
                <div className="m-[10px] pb-[0px] text-gray-500 text-justify leading-7 md:p-[20px] md:w-1/2 text-[14px] md:text-[16px]">
                    <p>
                        Somos un <strong>centro de educación inicial</strong>{" "}
                        con más de 50 años de experiencia acompañando a las
                        familias en la crianza y en el cuidado respetuoso de sus
                        niños y niñas. <strong>Little Villa</strong>
                        aporta activamente a la educación, buscando
                        permanentemente nuevas miradas de acercamiento a la
                        primera infancia a través de la reflexión y el
                        cuestionamiento crítico, con el fin de brindar las
                        mejores condiciones educativas.
                    </p>
                    <p>
                        <strong>Little Villa</strong> forma parte de la
                        Asociación de Promotoras de Educación Inicial-Perú
                        (APEIP) y es miembro fundador del Grupo Impulsor de la
                        Educación Inicial-Perú.
                    </p>
                </div>
                <div className="w-full max-w-[494px]">
                    <figure className="mx-auto my-[10px] aspect-w-4 aspect-h-3 w-full">
                        <Image
                            src="/images/about/quienes-somos-img.jpg"
                            layout="fill"
                            objectFit="contain"
                            alt={`img-infra`}
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;
