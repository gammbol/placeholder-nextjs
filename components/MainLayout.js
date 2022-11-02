import Link from "next/link";
import classes from '../styles/menu.module.css';

export default function ({ children }) {
    return (
        <>
            <nav className={classes.menu}>
                <Link className={classes.links} href={"/"}>Home</Link>
                <Link className={classes.links} href={"/posts"}>Posts</Link>
            </nav>
            <main className={classes.main}>
                {children}
            </main>
        </>
    )
}