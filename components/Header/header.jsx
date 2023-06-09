import Link from "next/link";
import classes from "./header.module.css"
import { AuthButton } from "../AuthButton/authbutton";

export function Header() {
    return (
        <header className={classes.header}>
            {/* <Link href="/information" className={classes.anchor}>
                Information
            </Link>
            <Link href="/about" className={classes.anchor}>
                About
            </Link>
            <Link href="/service" className={classes.anchor}>
                Service
            </Link>
            <Link href="/contents" className={classes.anchor}>
                Contents
            </Link>
            <Link href="/contact" className={classes.anchor}>
                Contact
            </Link>
            <Link href="/map" className={classes.anchor}>
                Map
            </Link> */}
            <AuthButton />
        </header>
    )
}