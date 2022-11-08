import Image from "next/image";


const AboutInfo = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex flex-col bg-gray-100 px-[20px] py-[40px] m-auto items-center md:flex-row md:px-[30px] md:py-[50px] md:max-w-[1100px]">
                <div className="w-full max-w-[494px]">
                    <figure className="mx-auto my-[10px] aspect-w-4 aspect-h-3 w-full">
                        <Image
                            src="/images/about/equipo-docente.jpg"
                            layout="fill"
                            objectFit="contain"
                            alt={`img-infra`}
                        />
                    </figure>
                </div>
                <div className="m-[10px] pb-[0px] text-gray-500 leading-7 text-justify md:p-[20px] md:w-1/2 text-[14px] md:text-[16px]">
                    <p>
                        Nuestro equipo docente está conformado por personal
                        altamente capacitado en su tarea, y recibe permanente
                        formación y asesoría para poder atender las necesidades
                        de los niños y las niñas. <strong>Little Villa</strong> considera el
                        desarrollo del vínculo afectivo entre maestras y alumnos
                        como base del aprendizaje y el crecimiento saludable.
                    </p>
                    <p>
                        En <strong>Little Villa</strong> estamos
                        siempre listos para que los niños y las niñas vengan a
                        sentir, pensar, jugar y aprender.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;