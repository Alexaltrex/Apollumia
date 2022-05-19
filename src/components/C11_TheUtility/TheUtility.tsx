import * as React from "react";
import {H2} from "../D_Common/H2/H2";
import style from "./TheUtility.module.scss"
import {AnimatedCircle2} from "../D_Common/AnimatedCircle2/AnimatedCircle2";

const circles = [
    {step: "01", text: "Early access to the game"},
    {step: "02", text: "Exclusive access to merchandises"},
    {step: "03", text: "Token reward"},
]

export const TheUtility = () => {
    return (
        <section className={style.theUtility}>

            <H2 titles={["the", "utility"]}/>

            <div className={style.content}>

                <div className={style.textBlock}>
                    <p data-aos="zoom-in-right"><span>The Genesis NFTs</span> will grant the owners a head start in the <span>Apollumia</span> Metaverse with a series of amazing perks.</p>
                </div>

                <div className={style.circleBlock} data-aos="zoom-in-left">
                    {
                        circles.map(({step, text}, index) => (
                            <div className={style.circleBox} key={index}>

                                <AnimatedCircle2/>

                                <p className={style.text}>{text}</p>
                                <p className={style.step}>{step}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    )
}