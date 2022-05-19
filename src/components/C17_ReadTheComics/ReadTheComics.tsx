import * as React from "react";
import style from "./ReadTheComics.module.scss"
import img from "../../assets/jpeg/readTheComics.jpg";
import {svgIcons} from "../../assets/svg/svgIcons";
import {HashLink} from "react-router-hash-link";

export const ReadTheComics = () => {
    return (
        <section className={style.readTheComics}>

            <div className={style.titleBlock}  data-aos="flip-left">
                <HashLink to="/comics#top" className={style.link}>Read The Comics</HashLink>
                <div className={style.arrowIcon}>
                    {svgIcons.bigArrow}
                </div>
            </div>

            <div className={style.frameWrapper}>
                <div className={style.frame}/>
                <img src={img} alt=""/>
            </div>

        </section>
    )
}