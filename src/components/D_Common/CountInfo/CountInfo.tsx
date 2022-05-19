import * as React from "react";
import style from "./CountInfo.module.scss";
import {FC} from "react";
import clsx from "clsx";

interface ICountInfo {
    currentIndex: number
    totalCount: number
    className?: string
}

export const CountInfo: FC<ICountInfo> = ({
                                              currentIndex,
                                              totalCount,
                                              className,
                                          }) => {
    return (
        <div className={clsx(style.countInfo, Boolean(className) && className)}>
            <p>{currentIndex}</p>
            <div className={style.divider}/>
            <p>{totalCount}</p>
        </div>
    )
}