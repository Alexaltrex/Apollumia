import * as React from "react";
import style from "./Footer.module.scss"
import {Link, useLocation} from "react-router-dom";
import {footerLinks, links} from "../A3_BurgerMenu/BurgerMenu";
import {socialLinks} from "../A1_Header/Header";
import {svgIcons} from "../../assets/svg/svgIcons";
import {HashLink} from 'react-router-hash-link';
import {AnimatedLink} from "../D_Common/AnimatedLink/AnimatedLink";


export const Footer = () => {
    const location = useLocation();

    return (
        <footer className={style.footer}>

            <div className={style.topBlock}>

                <nav className={style.links}>
                    {
                        footerLinks.map(({label, to}, index) => (
                            <AnimatedLink key={index} className={style.linkWrapper}>
                                <HashLink to={index !== 3 ? `${to}#top` : to}
                                          className={style.link}
                                          smooth={true}
                                >
                                    {label}
                                </HashLink>
                            </AnimatedLink>

                        ))
                    }
                </nav>

                <div className={style.logoDesktop}>{svgIcons.logo}</div>

                <nav className={style.socialLinks}>
                    {
                        socialLinks.map(({label, href}, index) => (
                                <AnimatedLink key={index} className={style.linkWrapper}>
                                    <a className={style.link}
                                       href={href}
                                    >
                                        {label}
                                    </a>
                                </AnimatedLink>

                            )
                        )
                    }
                </nav>
            </div>

            <div className={style.bottomBlock}>
                <div className={style.left}>
                    <p className={style.design}>Design by <a href="https://antoniukagency.com/"
                                                             target="_blank">Antoniuk</a></p>
                    <p className={style.rights}>@ Apollumia. All rights reserved.</p>
                </div>

                <p className={style.designDesktop}>Design by <AnimatedLink className={style.link}><a
                    href="https://antoniukagency.com/" target="_blank">Antoniuk</a></AnimatedLink></p>

                <HashLink className={style.toTop}
                          to={`${location.pathname}#top`}
                          smooth={true}
                >
                    <p>To top</p>
                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                </HashLink>
            </div>

        </footer>
    )
}