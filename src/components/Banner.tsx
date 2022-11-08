import Image from 'next/image';
import styles from '../styles/components/Banner.module.scss'

interface Props {
    section: string;
    source: string;
}

const Banner = ({ section, source }: Props) => {
    return (
        <div className={styles.banner_container}>
            <h2 className={styles.banner_container_title}>{section}</h2>
            <div className={styles.banner_container_background}></div>
            <figure className={styles.banner_container_figure}>
                <Image className={styles.banner_container_image} layout="fill" objectFit="cover" src={`/images/banner/${source}.jpg`} alt={section}/>
            </figure>
        </div>
    )
}

export default Banner