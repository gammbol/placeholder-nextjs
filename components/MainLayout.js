import Link from "next/link";
import classes from '../styles/header.module.css';
import Router from "next/router";
import Footer from "./Footer";

export default function MainLayout({ children }) {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.header__container}>
                    <div className={classes.header__logo} onClick={() => Router.push('/')}></div>
                    <nav className={classes.header__nav}>
                        <Link href={'/'} className={classes.header__link}>Home</Link>
                        <Link href={'/posts'} className={classes.header__link}>Posts</Link>
                    </nav>
                </div>
            </header>
            <div className={classes.wrapper}>
                <main className={classes.main}>
                    {children}
                </main>
            </div>
            <Footer></Footer>
        </>
    )
}