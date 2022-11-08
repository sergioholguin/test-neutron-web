import Image from 'next/image';

interface Props {
    source: string;
    name: string;
}

const Card = ({source, name}: Props) => {
    return (
        <div className="relative w-100 h-80">
            <Image layout="fill" objectFit="cover" src={source} alt={name}/>
        </div>
    )
}

export default Card