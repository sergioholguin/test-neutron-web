import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
    return (
         <footer className={styles.footer}>
             <div className={styles.footer_info}>
                 <div className={styles.footer_info_box_fig}>
                     <figure className="aspect-w-16 aspect-h-9">
                             <Image src="/images/footer/logo-white.png" layout="fill" objectFit="contain" alt="logo"/>
                     </figure>
                 </div>
                 <div className={styles.footer_info_box}>
                     <h3>Ubicación</h3>
                     <a className={styles.footer_info_box_link} href="">
                         José Del Llano Zapata 454,<br/>
                         Miraflores Lima – Perú
                     </a>
                     <h3>Escríbenos</h3>
                     <a className={styles.footer_info_box_link} href="mailto:nidolittlevilla@gmail.com">nidolittlevilla@gmail.com</a>
                     <a className={styles.footer_info_box_link} href="mailto:secretaria@nidolittlevilla.com">secretaria@nidolittlevilla.com</a>
                 </div>
                 <div className={styles.footer_info_box}>
                     <h3>¡Contáctanos hoy!</h3>
                     <a className={styles.footer_info_box_link} href="tel:014226022">+511 422 6022</a>
                     <a className={styles.footer_info_box_link} href="tel:014405835">+511 440 5835</a>
                     <h3>Síguenos en nuestras redes</h3>
                     <div className={styles.footer_info_box_social}>
                         <a href="https://www.facebook.com/profile.php?id=100057254958548" target="_blank" rel="noopener noreferrer">
                             <FontAwesomeIcon icon={faFacebook} className={styles.footer_info_box_social_icon}/>
                         </a>
                         <a href="https://www.instagram.com/nidolittlevilla" target="_blank" rel="noopener noreferrer">
                             <FontAwesomeIcon icon={faInstagram} className={styles.footer_info_box_social_icon}/>
                         </a>
                     </div>
                 </div>
             </div>
             <div className={styles.footer_copyright}>
                 <small><b>Nido Little Villa </b>&copy; 2022 - Todos los derechos Reservados</small>
             </div>
        </footer>
    )
}

export default Footer