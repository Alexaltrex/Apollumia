import * as React from "react";
import style from "./ButtonEllipse.module.scss"
import {FC} from "react";
import clsx from "clsx";

interface IButtonEllipse extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string
    className?: string
}

export const ButtonEllipse: FC<IButtonEllipse> = ({
                                                      label,
                                                      className,
                                                      ...props
                                                  }) => {

    return (
        <button className={clsx(style.buttonEllipse, Boolean(className) && className)}
                {...props}
        >
            <p className={style.label}>{label}</p>

            <div className={style.filledArea}>
                <div className={style.circle}/>
            </div>

            <div  className={style.rotateArea}/>
        </button>
    )
}