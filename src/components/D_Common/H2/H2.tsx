import {FC} from "react";
import style from "./H2.module.scss"
import * as React from "react";
interface IH2 {
    titles: string[]
}

export const H2:FC<IH2> = ({titles}) => {
    return (
        <h2 className={style.h2}>
            {
                titles.map((title, index) => (
                    <p key={index} data-aos="zoom-in">{title}</p>
                ))
            }
        </h2>
    )
}