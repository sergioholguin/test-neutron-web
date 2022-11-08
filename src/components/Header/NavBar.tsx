import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import { routes } from "../../data/navigation_data";
import styles from "../../styles/components/NavBar.module.scss";

const NavBar = () => {
    return (
        <div className={styles.outer_container}>
            <section className={styles.logo}>
                <figure className="m-0 w-[17vw] aspect-w-16 aspect-h-9">
                    <Image
                        src="/images/header/logo-color.png"
                        layout="fill"
                        objectFit="contain"
                        alt="logo"
                    />
                </figure>
            </section>
            <div className={styles.link_container}>
                {routes.map((route, index) => (
                    <Link key={index} href={route.path}>
                        <a className={styles.link}>{route.title}</a>
                    </Link>
                ))}
            </div>
            <div className={styles.hamburger}>
                <BurgerButton />
            </div>
        </div>
    );
};

export default NavBar;
