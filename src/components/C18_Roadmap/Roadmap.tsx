import * as React from "react";
import style from "./Roadmap.module.scss"
import {H2} from "../D_Common/H2/H2";
import src0 from "../../assets/png/roadmap/src0.png";
import src1 from "../../assets/png/roadmap/src1.png";
import src2 from "../../assets/png/roadmap/src2.png";
import src3 from "../../assets/png/roadmap/src3.png";
import src4 from "../../assets/png/roadmap/src4.png";
import {svgIcons} from "../../assets/svg/svgIcons";
import clsx from "clsx";

const items = [
    {
        step: "Q2",
        year: 2022,
        title: <p className={style.titleBlock} data-aos="flip-up"><span>NFT</span> Launch</p>,
        done: true,
        src: src0,
    },
    {
        step: "Q3",
        year: 2022,
        title: <p className={style.titleBlock} data-aos="flip-up"><span>Token</span> Launch</p>,
        done: false,
        src: src1,
    },
    {
        step: "Q1",
        year: 2023,
        title: <p className={style.titleBlock} data-aos="flip-up"><span>Webgame</span> Launch</p>,
        done: false,
        src: src2,
    },
    {
        step: "H2",
        year: 2023,
        title: <p className={style.titleBlock} data-aos="flip-up"><span>Mobile Game</span> Launch</p>,
        done: false,
        src: src3,
    },
    {
        step: "H1",
        year: 2024,
        title: <p className={style.titleBlock} data-aos="flip-up">Entering the <span>Metaverse</span></p>,
        done: false,
        src: src4,
    },
]


export const Roadmap = () => {

    return (
        <section className={style.roadmap}>

            <H2 titles={["roadmap"]}/>

            <div className={style.content}>
                {
                    items.map(({step, year, title, done, src}, index) => (
                        <div className={style.item}
                             key={index}
                             style={{backgroundImage: `url(${src})`}}
                        >
                            <div className={style.inner}>

                                <p className={style.leftBlock} data-aos="zoom-in-right">
                                    <span>{step}</span> <span>{year}</span>
                                </p>

                                {title}

                                <div className={clsx({
                                    [style.iconBlock]: true,
                                    [style.iconBlock_done]: done,
                                })}
                                     data-aos="zoom-in-left"
                                >
                                    {done ? svgIcons.check : svgIcons.menu}
                                </div>


                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}