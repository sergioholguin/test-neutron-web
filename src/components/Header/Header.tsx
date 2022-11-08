import { useInView } from 'react-intersection-observer'
import styles from "../../styles/components/Header.module.scss";
import ContactInfo from "./ContactInfo";
import NavBar from "./NavBar";
import { contact_info } from "../../data/contact_info";

const Header = () => {
    const options = {
        threshold: 0.5,
        initialInView: true
    }
    const { ref: myRef, inView} = useInView(options)
    const stickyHeader = !inView

    return (
        <>
            <ContactInfo
                phone_numbers={contact_info.phone_numbers}
                facebook={contact_info.facebook}
                instagram={contact_info.instagram}
            />
            <div className={styles.navbar_reference} ref={myRef}/>
            <header className={stickyHeader? styles.sticky_navbar : styles.navbar}>
                <NavBar />
            </header>
        </>
    );
};

export default Header;
