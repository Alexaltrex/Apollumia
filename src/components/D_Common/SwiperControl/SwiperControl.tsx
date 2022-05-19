import {FC} from "react";
import style from "./SwiperControl.module.scss"
import * as React from "react";
import clsx from "clsx";
import {svgIcons} from "../../../assets/svg/svgIcons";


interface ISwiperControl {
    className?: string
    disabledLeft: boolean
    disabledRight: boolean
    onClickLeft: () => void
    onClickRight: () => void
}

export const SwiperControl: FC<ISwiperControl> = ({
                                                      className,
                                                      disabledLeft,
                                                      disabledRight,
                                                      onClickLeft,
                                                      onClickRight
                                                  }) => {
    return (
        <div className={clsx(style.swiperControl, Boolean(className) && className)}>
            <button className={style.btn}
                    disabled={disabledLeft}
                    onClick={onClickLeft}
            >
                {svgIcons.arrowLeft}
            </button>

            <div className={style.divider}/>

            <button className={style.btn}
                    disabled={disabledRight}
                    onClick={onClickRight}
            >
                {svgIcons.arrowRight}
            </button>
        </div>
    )
}