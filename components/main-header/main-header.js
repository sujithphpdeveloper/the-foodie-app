import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

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
                        <NavLink href={'/meals'}>Explore Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/community'}>Foodie Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>;
}