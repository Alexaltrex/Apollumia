import * as React from "react";
import style from "./Play.module.scss"

import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import {svgIcons} from "../../assets/svg/svgIcons";
import {useState} from "react";
import SwiperClass from "swiper/types/swiper-class";
import clsx from "clsx";
import {AnimatedCircle2} from "../D_Common/AnimatedCircle2/AnimatedCircle2";

const items = [
    <p data-aos="flip-left">A core game experience designed by the <span>industry best</span>, with inputs from the community.</p>,
    <p data-aos="flip-left"><span>Powered</span> by the best and brightest players and <span>community</span>, building and fighting for a world all for
        themselves.</p>,
    <p data-aos="flip-left"><span>Driven</span> by the most advanced multi-chain <span>blockchain</span> technology to manage the in-game economy,
        activities, and more.</p>,
    <p data-aos="flip-left"><span>Led</span> by the greatest <span>guilds</span> representing the 5 factions in Apollumia. Holders of our $DAO will be
        able to govern, set rules, and vote for the future of Apollumia and the community.</p>,
]

export const Play = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <section className={style.play}>

            <div className={style.titleMobile}>
                <p data-aos="zoom-in-right">play</p>
                <p data-aos="zoom-in-left">create</p>
                <p data-aos="zoom-in-right">socialize</p>
                <p data-aos="zoom-in-left">earn</p>
            </div>

            <div className={style.swiperWrapper}>
                <Swiper slidesPerView="auto"
                        slidesPerGroup={1}
                        centeredSlides={true}
                        loop={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        className={style.swiperMobile}
                        spaceBetween={20}
                >
                    {
                        items.map((slide, index) => (
                            <SwiperSlide key={index}
                                         className={style.slide}
                            >
                                {slide}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <button className={style.arrowPrev}
                        onClick={() => swiper?.slidePrev()}
                >
                    {svgIcons.bigArrow}
                </button>

                <button className={style.arrowNext}
                        onClick={() => swiper?.slideNext()}
                >
                    {svgIcons.bigArrow}
                </button>
            </div>

            <div className={clsx(style.row, style.row_top)}>
                <p className={style.title} data-aos="flip-up">play</p>

                <div className={style.circle}>
                    {items[0]}
                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                    <AnimatedCircle2 className={style.circleIcon}/>
                </div>

                <p className={style.title} data-aos="flip-up">Socialize</p>

                <div className={style.circle}>
                    {items[1]}
                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                    <AnimatedCircle2 className={style.circleIcon}/>
                </div>

            </div>

            <div className={clsx(style.row, style.row_bottom)}>

                <div className={style.circle}>
                    {items[2]}
                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                    <AnimatedCircle2 className={style.circleIcon}/>
                </div>

                <p className={style.title} data-aos="flip-up">create</p>

                <div className={style.circle}>
                    {items[3]}
                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                    <div className={style.arrowIcon}>{svgIcons.bigArrow}</div>
                    <AnimatedCircle2 className={style.circleIcon}/>
                </div>

                <p className={style.title} data-aos="flip-up">earn</p>

            </div>


        </section>
    )
}