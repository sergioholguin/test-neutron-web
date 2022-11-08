import {useContext} from "react";
import { SideBarContext } from "../SideBar/SideBarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/components/BurgerButton.module.scss";


const BurgerButton = () => {
    const { showSideBar } = useContext(SideBarContext);

    return (
        <div className={styles.hamburger_container} onClick={showSideBar}>
            <FontAwesomeIcon icon={faBars} className={styles.hamburger_icon} />
            <p className={styles.hamburger_text}>Menú</p>
        </div>
    );
};

export default BurgerButton;
