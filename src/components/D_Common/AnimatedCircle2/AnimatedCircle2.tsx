import {FC} from "react";
import * as React from "react";
import {svgIcons} from "../../../assets/svg/svgIcons";
import style from "./AnimatedCircle2.module.scss"
import clsx from "clsx";

interface IAnimatedCircle {
    className?: string
}

export const AnimatedCircle2: FC<IAnimatedCircle> = ({className}) => {

    return (
        <div className={clsx(
            style.animatedCircle2,
            Boolean(className) && className,
        )}
        >
            {svgIcons.circleBack}
            {svgIcons.circleAnimated}
        </div>
    )
}