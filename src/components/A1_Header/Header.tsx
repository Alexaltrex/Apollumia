import * as React from "react";
import style from "./Header.module.scss"
import {svgIcons} from "../../assets/svg/svgIcons";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectBurgerMenu, selectSound, setBurgerMenu, setSound} from "../../store/appSlice";
import clsx from "clsx";
import {useEffect, useRef, useState} from "react";
import ReactAudioPlayer from "react-audio-player";

const soundSrc = require("../../assets/sound/Loop_Smooth.wav");

export const socialLinks = [
    {icon: svgIcons.discord, href: "#", label: "Discord"},
    {icon: svgIcons.twitter, href: "#", label: "Twitter"},
    {icon: svgIcons.instagram, href: "#", label: "Instagram"},
]


export const Header = () => {
    const burgerMenu = useAppSelector(selectBurgerMenu);
    const sound = useAppSelector(selectSound);
    const dispatch = useAppDispatch();

    const [scroll, setScroll] = useState(0);
    const [scrollDown, setScrollDown] = useState(false);

    useEffect(() => {
        window.addEventListener(
            'scroll',
            () => {
                if (window.scrollY > scroll) {
                    setScrollDown(true)
                } else {
                    setScrollDown(false)
                }
                setScroll(window.scrollY);
            }
        );
        return document.removeEventListener(
            'scroll',
            () => {
                if (window.scrollY > scroll) {
                    setScrollDown(true)
                } else {
                    setScrollDown(false)
                }
                setScroll(window.scrollY);
            }
        );

    });

    const ref = useRef<ReactAudioPlayer>(null);

    useEffect(() => {
        if (sound) {
            ref?.current?.audioEl?.current?.play();
        } else {
            ref?.current?.audioEl?.current?.pause();
        }
    }, [sound, ref])

    return (
        <header className={clsx({
            [style.header]: true,
            [style.header_scroll]: scrollDown,
        })}>

            <div className={style.playerWrapper}>
                <ReactAudioPlayer
                    src={soundSrc}
                    loop
                    className={style.player}
                    ref={ref}
                />
            </div>

            <Link to="/" className={style.logoMobile}>{svgIcons.logo}</Link>

            <button className={style.burgerBtnMobile}
                    onClick={() => dispatch(setBurgerMenu(!burgerMenu))}
            >
                {
                    burgerMenu ? svgIcons.burgerClose : svgIcons.burgerOpen
                }
            </button>


            <div className={style.leftDesktop}>

                <div className={style.burgerBlock}>
                    <button className={style.burgerBtnDesktop}
                            onClick={() => dispatch(setBurgerMenu(!burgerMenu))}
                    >
                        {
                            burgerMenu ? svgIcons.burgerClose : svgIcons.burgerOpen
                        }
                    </button>
                    <p onClick={() => dispatch(setBurgerMenu(!burgerMenu))}
                    >
                        menu
                    </p>
                </div>

                <div className={style.soundBlock}>
                    <div className={style.soundIcon}
                         onClick={() => dispatch(setSound(!sound))}
                    >
                        {sound ? svgIcons.soundOn : svgIcons.soundOff}
                    </div>

                    <button className={clsx({
                        [style.btn]: true,
                        [style.btn_active]: sound,
                    })}
                            onClick={() => dispatch(setSound(true))}
                    >
                        on
                    </button>

                    <div className={style.divider}/>

                    <button className={clsx({
                        [style.btn]: true,
                        [style.btn_active]: !sound,
                    })}
                            onClick={() => dispatch(setSound(false))}
                    >
                        off
                    </button>

                </div>

            </div>

            <Link to="/" className={style.logoDesktop}>{svgIcons.logo}</Link>

            <div className={style.rightDesktop}>
                {
                    socialLinks.map(({icon, href}, index) => (
                        <a key={index}
                           href={href}
                           target="_blank"
                           rel="noopener"
                           className={style.link}
                        >
                            {icon}
                        </a>
                    ))
                }
            </div>
        </header>
    )
}