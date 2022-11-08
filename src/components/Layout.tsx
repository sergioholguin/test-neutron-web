import { ReactNode, useContext } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer";
import { SideBarContext } from "./SideBar/SideBarContext";
import styles from "../styles/components/Layout.module.scss";
import BannerGallery from "./BannerGallery";

type LayoutProps = {
    readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const { sideBar, showSideBar } = useContext(SideBarContext);
    return (
        <div className={styles.outer_container}>
            <SideBar />
            <div
                className={`${styles.inner_container} ${
                    sideBar
                        ? styles.inactive_inner_container
                        : styles.active_inner_container
                }`}
            >
                <div
                    className={`${styles.overlay} ${
                        sideBar
                            ? styles.active_overlay
                            : styles.inactive_overlay
                    }`}
                    onClick={showSideBar}
                />
                <div className={styles.content}>
                    <Header />
                    {children}
                    <BannerGallery />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
