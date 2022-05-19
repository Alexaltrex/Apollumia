import * as React from "react";
import style from "./TheTeam.module.scss";
import {H2} from "../D_Common/H2/H2";
import src0 from "../../assets/png/the team/src0.png";
import src1 from "../../assets/png/the team/src1.png";
import src2 from "../../assets/png/the team/src2.png";
import src3 from "../../assets/png/the team/src3.png";
import src4 from "../../assets/png/the team/src4.png";
import src5 from "../../assets/png/the team/src5.png";
import src6 from "../../assets/png/the team/src6.png";
import src7 from "../../assets/png/the team/src7.png";
import src8 from "../../assets/png/the team/src8.png";
import src9 from "../../assets/png/the team/src9.png";
import {svgIcons} from "../../assets/svg/svgIcons";


const team = [
    { name: "Matt Quadro 1", job: "Founder & Chairman", src: src0, twitter: "#" },
    { name: "Matt Quadro 2", job: "Founder & Chairman", src: src1, twitter: "#" },
    { name: "Matt Quadro 3", job: "Founder & Chairman", src: src2, twitter: "#" },
    { name: "Matt Quadro 4", job: "Founder & Chairman", src: src3, twitter: "#" },
    { name: "Matt Quadro 5", job: "Founder & Chairman", src: src4, twitter: "#" },
    { name: "Matt Quadro 6", job: "Founder & Chairman", src: src5, twitter: "#" },
    { name: "Matt Quadro 7", job: "Founder & Chairman", src: src6, twitter: "#" },
    { name: "Matt Quadro 8", job: "Founder & Chairman", src: src7, twitter: "#" },
    { name: "Matt Quadro 9", job: "Founder & Chairman", src: src8, twitter: "#" },
    { name: "Matt Quadro 10", job: "Founder & Chairman", src: src9, twitter: "#" },
]

export const TheTeam = () => {
    return (
        <section className={style.theTeam}>

            <div className={style.anchor}  id="team"/>

            <H2 titles={["the", "team"]}/>

            <div className={style.content}>
                <p className={style.description} data-aos="flip-up">
                    We’re a group of game industry <span>veterans</span> from some of the <span>top tech/game companies</span>, with experience of successfully launching global titles that have acquired <span>hundreds of millions</span> in downloads.
                </p>

                <div className={style.team}>
                    {
                        team.map(({name, job, src, twitter}, index) => (
                            <div className={style.item} key={index}>
                                <img src={src} alt=""
                                     data-aos="flip-up"
                                />

                                <div className={style.infoBlock}>
                                    <div className={style.topRow} data-aos="flip-up">
                                        <p className={style.name}>{name}</p>
                                        <a href={twitter}
                                           target="_blank"
                                           rel="noreferrer noopener"
                                        >
                                            {svgIcons.twitter}
                                        </a>
                                    </div>

                                    <p data-aos="flip-up" className={style.job}>{job}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}