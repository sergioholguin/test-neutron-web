import Image from "next/image";

const InfrastructureDescription = () => {
    return (
        <div className="bg-gray-50">
            <div className="flex flex-col bg-gray-50 px-[20px] py-[40px] m-auto items-center md:flex-row md:py-[50px] md:max-w-[1100px]">
                <div className="w-full max-w-[536px]">
                    <figure className="mx-auto my-[10px] aspect-w-2 aspect-h-1 w-full">
                        <Image
                            src="/images/infrastructure/img-infraestructura.jpg"
                            layout="fill"
                            objectFit="contain"
                            alt={`img-infra`}
                        />
                    </figure>
                </div>
                <p className="m-[10px] p-[20px] pb-[0px] text-gray-500 leading-7 text-justify text-[14px] md:w-1/2 md:text-[16px]">
                    En <span className="font-bold">Little Villa</span> contamos
                    con un amplio local (720 mts2), excelente infraestructura y
                    áreas libres que permiten a los niños y las niñas jugar,
                    explorar y aprender en espacios cómodos adaptados a sus
                    necesidades.
                </p>
            </div>
        </div>
    );
};

export default InfrastructureDescription;