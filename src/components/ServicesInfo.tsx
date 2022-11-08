import Image from "next/image";
import { services } from "../data/services";
import styles from "../styles/components/Services.module.scss";

const ServicesInfo = () => {
  return (
    <div className={styles.container}>
      {services.map((service) => (
        <section key={service.id} className={styles.container_service}>
          <div className={styles.container_service_info}>
            <figure className={styles.container_service_info_icon}>
              <Image
                  src={service.icon}
                  layout="fill"
                  objectFit="contain"
                  alt={`${service.title} icon`}
              />
            </figure>
            <div className={styles.container_service_info_text}>
              <h1 className={styles.container_service_info_text_title}>
                {service.title}
              </h1>
              <p className={styles.container_service_info_text_description}>
                {service.description}
              </p>
            </div>
          </div>
          <figure className={styles.container_service_photo}>
            <Image
                src={service.photo}
                layout="fill"
                objectFit="contain"
                alt={`${service.title} photo`}
            />
          </figure>
        </section>
      ))}
    </div>
  );
};

export default ServicesInfo;
