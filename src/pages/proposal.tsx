import Image from "next/image";
import Banner from "../components/Banner";
import {useEffect, useState} from "react";

const Proposal = () => {
    const imgBase = "psicomotricidad"
    const [source, setSource] = useState(imgBase)

    useEffect(() => {
        const interval = setInterval(()=>{
             source == imgBase ? setSource(imgBase.concat("2")) : setSource(imgBase)
        },4000)
        return () => clearInterval(interval);
    },[source])

    return (
        <>
            <Banner section="Nuestra propuesta educativa" source="propuesta-educativa"/>
            <div className="container mx-auto w-4/5	md:max-w-[1100px]">
                <div className="flex flex-col my-10">
                    <div className="flex md:flex-row items-center justify-center flex-col  mb-10">
                        <div className="md:w-1/2">
                            <h3 className="text-[#55509f] text-center text-[20px]  md:text-[30px] md:text-start">Construcción del aprendizaje a través del juego libre</h3>
                            <p className="text-[14px] md:text-[16px] text-[#7a7a7a] text-justify">En <b>Little Villa</b> consideramos a cada niño y niña como un ser único con sus propias
                                características, ritmos y tiempos de desarrollo. Nuestra metodología está basada en la
                                construcción del aprendizaje a través del juego libre y de actividades significativas en un
                                ambiente cálido y seguro.</p>
                            <p className="text-[14px] md:text-[16px] text-[#7a7a7a] text-justify">Estamos convencidos de la importancia del desarrollo emocional como eje integrador de todas
                                las áreas, para lo cual brindamos un espacio afectivo y respetuoso. </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image src="/images/proposal/img-prop-educativa.jpg"  width="420" height="300"  alt="prop-educativa"/>
                        </div>
                    </div>
                    <div className="flex md:flex-row items-center justify-center flex-col">
                        <div className="md:w-1/2 flex justify-center">
                            <Image src={`/images/proposal/${source}.jpg`}  width="420" height="300" alt="prop-psicomotricidad"/>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-[16px] md:text-[18px]  text-[#7a7a7a] text-justify">
                                <b>
                                    Incluimos la psicomotricidad como parte de nuestra propuesta para favorecer el aspecto
                                    motriz, cognitivo y afectivo a través del libre movimiento. De esta manera, buscamos que los
                                    niños y las niñas se sientan libres de explorar y descubrir según sus intereses.
                                </b>
                            </p>
                            <p className="text-[14px] md:text-[16px] text-[#7a7a7a] text-justify">
                                Promovemos una constante comunicación entre la familia y el nido para brindar un
                                acompañamiento personalizado. Además, ofrecemos espacios de diálogo y reflexión para los
                                padres de familia y otros cuidadores significativos sobre distintos temas de crianza, con el
                                fin de compartir experiencias y resolver inquietudes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Proposal