import Link from "next/link";

interface Props {
    route: string;
    title: string;
}

const ButtonInfo = ({ route, title }: Props) => {
    return (
        <Link href={`/${route}`}>
            <a className="flex hover:-translate-y-2 items-center bg-red-600 text-white py-2 px-4 rounded no-underline">
                <span className="text-[12px] md:text-[15px] mr-1">
                    {title}
                </span>
                <span className="text-[7px] md:text-[10px]">
                    &#10095;
                </span>
            </a>
        </Link>
    )
}

export default ButtonInfo