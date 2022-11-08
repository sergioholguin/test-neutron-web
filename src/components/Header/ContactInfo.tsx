import styles from "../../styles/components/ContactInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactInfo = (props: any) => {
    return (
        <div className={styles.outer_container}>
            <div className={styles.contact}>
                <p className={styles.contact_phone}>
                    Teléfonos: {props.phone_numbers.join(" · ")}
                </p>
                <div className={styles.contact_social}>
                    <p className={styles.contact_social_text}>Síguenos: </p>
                    <div className={styles.contact_social_links}>
                        <div className={styles.contact_social_icon_container}>
                            <a
                                href={props.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className={styles.contact_social_icon}
                                />
                            </a>
                        </div>
                        <div className={styles.contact_social_icon_container}>
                            <a
                                href={props.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className={styles.contact_social_icon}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
