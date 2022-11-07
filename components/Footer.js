import classes from '../styles/footer.module.css'
import Router from "next/router";

export default function Footer () {
    return (
        <>
            <footer className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.footer__logo} onClick={() => Router.push('/')}></div>
                    <p className={classes.footer__rights}>© 2018 Noiceland™, all rights reserved</p>
                </div>
            </footer>
        </>
    )
}