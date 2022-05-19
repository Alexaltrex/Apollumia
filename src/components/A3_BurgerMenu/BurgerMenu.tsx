import * as React from "react";
import style from "./BurgerMenu.module.scss"
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectBurgerMenu, setBurgerMenu} from "../../store/appSlice";
import clsx from "clsx";
import {socialLinks} from "../A1_Header/Header";
import {svgIcons} from "../../assets/svg/svgIcons";
import {AnimatedLink} from "../D_Common/AnimatedLink/AnimatedLink";

export const links = [
    { step: "01", label: "home", to: "/" },
    { step: "02", label: "comics", to: "/comics" },
    { step: "03", label: "roadmap", to: "/roadmap" },
];

export const footerLinks = [...links, {
    step: "04", label: "team", to: "/roadmap#team"
}]

export const BurgerMenu = () => {
    const burgerMenu = useAppSelector(selectBurgerMenu);
    const dispatch = useAppDispatch();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: burgerMenu,
        })}>
            <div className={style.inner}>
                <nav className={style.links}>
                    {
                        links.map(({step, label, to}, index) => (
                            <AnimatedLink key={index}
                                          className={style.linkWrapper}
                            >
                                <Link
                                    to={to}
                                    className={style.link}
                                    onClick={() => dispatch(setBurgerMenu(false))}
                                >
                                    <p className={style.step}>{step}</p>
                                    <p className={style.label}>{label}</p>
                                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                                </Link>
                            </AnimatedLink>

                        ))
                    }
                </nav>

                <nav className={style.socialLinks}>

                    {
                        socialLinks.map(({icon, href}, index) => (
                            <a key={index}
                               href={href}
                               target="_blank"
                               rel="noopener"
                               className={style.link}
                               onClick={() => dispatch(setBurgerMenu(false))}
                            >
                                {icon}
                            </a>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}