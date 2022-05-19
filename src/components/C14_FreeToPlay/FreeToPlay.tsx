import * as React from "react";
import style from "./FreeToPlay.module.scss"
import {H2} from "../D_Common/H2/H2";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import {svgIcons} from "../../assets/svg/svgIcons";
import clsx from "clsx";
import {AnimatedCircle2} from "../D_Common/AnimatedCircle2/AnimatedCircle2";

const slides = [
    "Resources Gathering",
    "World Exploration",
    "NFT Trading",
    "Faction VS Faction",
    "Guild VS Guild",
    "PVP",
    "PVE",
    "Base Building",
];


export const FreeToPlay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className={style.freeToPlay}>
            <H2 titles={["the", "gameplays"]}/>

            <div className={style.content}>

                <Swiper slidesPerView="auto"
                        slidesPerGroup={1}
                        centeredSlides={true}
                        loop={true}
                        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                        className={style.swiperMobile}
                        spaceBetween={10}
                >
                    {
                        slides.map((slide, index) => (
                            <SwiperSlide className={clsx({
                                [style.slide]: true,
                                [style.slide_active]: index === currentIndex,
                            })}
                                         key={index}

                            >
                                <div className={style.slideInnerWrapper}>
                                    <div className={style.circleIcon}>{svgIcons.circle}</div>

                                    <p className={style.text}>{slide}</p>

                                    <div className={style.arrowIcon}>
                                        {svgIcons.bigArrow}
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className={style.circlesBlock} data-aos="flip-left">
                    {
                        slides.map((text, index) => (
                            <div className={style.circleWrapper}
                                 key={index}
                            >
                                <AnimatedCircle2 className={style.circleIcon}/>

                                <p className={style.text}>{text}</p>

                                <div className={style.arrowIconWrapper}>
                                    {svgIcons.bigArrow}
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className={style.tokenBlock} data-aos="flip-left">
                    <p>GameFi 2.0</p>
                    {/*<p>t</p>*/}
                    {/*<div className={style.tokenIcon}>{svgIcons.token}</div>*/}
                    {/*<p>ken</p>*/}
                </div>

            </div>
        </section>
    )
}