import Link from "next/link";
import { useContext } from "react";
import { routes } from "../../data/navigation_data";
import { SideBarContext } from "./SideBarContext";
import styles from "../../styles/components/SideBar.module.scss";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
    const { sideBar, showSideBar } = useContext(SideBarContext);

    const showSideBarWithDelay = () => {
        const delay = 200;
        setTimeout(showSideBar, delay);
    };

    return (
        <nav className={`${styles.sidebar} ${sideBar ? styles.active_sidebar : styles.inactive_sidebar}`}>
            <ul className={styles.sidebar_items}>
                <li className={styles.close_button_container} onClick={showSideBar}>
                    <div className={styles.close_button_item}>
                        <FontAwesomeIcon icon={ faCircleXmark } className={styles.close_button_icon} />
                        <span>CERRAR MENÚ</span>
                    </div>
                </li>
                {routes.map((route, index) => (
                    <li key={index} className={styles.link_container} onClick={showSideBarWithDelay}>
                        <Link href={route.path}>
                            <a className={styles.link}>{route.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideBar;
