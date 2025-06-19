import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function MainHeader() {
    return <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className={classes.logo} href="/public">
                <Image src={logoImg} alt="The Foode App" priority width={100} height={100}/>
                Food is ALL!
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse the Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Reach the Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>;
}