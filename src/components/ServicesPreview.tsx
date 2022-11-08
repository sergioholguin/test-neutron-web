import { servicesPreview } from "../data/ServicesPreview";
import Image from "next/image";
import Link from "next/link";

const ServicesPreview = () => {
    return (
        <div >
            <h3 className="text-[#55509f] text-center text-[24px] md:text-[30px] md:text-start md:mb-0 mb-10">Nuestros Servicios</h3>
            <div className="flex flex-col md:flex-row ">
                {servicesPreview.map((service) => (
                    <div key={service.id} className="flex md:flex-row flex-col items-center mb-10 md:mb-0">
                        <figure className="mt-auto ml-0 mr-2 w-40 h-40 md:w-60 md:h-60 relative">
                            <Image
                                src={service.img}
                                layout="fill"
                                objectFit="contain"
                                alt={service.title}
                            />
                        </figure>
                        <div className="text-center md:text-start">
                            <h4 className="text-[20px] md:text-[22px] leading-[30px] m-0">{service.title}</h4>
                            <p className="text-[14px] md:text-[15px] leading-[21px] m-0">{service.description}</p>
                            <Link href="/services"><a className="text-[14px]">Leer más</a></Link>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default ServicesPreview