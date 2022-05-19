import {FC, useState} from "react";
import * as React from "react";
import {svgIcons} from "../../../assets/svg/svgIcons";
import style from "./AnimatedCircle.module.scss"
import clsx from "clsx";
import "./circle.scss"

interface IAnimatedCircle {
    className?: string
}

export const AnimatedCircle: FC<IAnimatedCircle> = ({className}) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div className={clsx(
            style.animatedCircle,
            Boolean(className) && className,
            mouseEnter && "animCircle"
        )}
             onMouseEnter={() => setMouseEnter(true)}
        >
            {svgIcons.circleBack}
            {svgIcons.circleAnimated}
        </div>
    )
}