import * as React from "react";
import style from "./TheGame.module.scss"
import {H2} from "../D_Common/H2/H2";
import {ButtonEllipse} from "../D_Common/ButtonEllipse/ButtonEllipse";

export const TheGame = () => {
    return (
        <section className={style.theGame}>

            <H2 titles={["the", "game"]}/>

            <div className={style.content}>

                <p className={style.description} data-aos="flip-left">
                    <span>Apollumia</span> is the world’s <span>first free-to-play</span>, play to earn 4X strategy game built natively on blockchain, where players join a vast community of survivors looking to decide <span>the future of a vast wasteland.</span>
                </p>

                <ButtonEllipse label="join us"
                               className={style.btn}
                               data-aos="fade-left"
                />

                <p className={style.cursive}
                   data-aos="fade-right"
                >
                    Join our Discord to stay up to date
                </p>
            </div>
        </section>
    )
}