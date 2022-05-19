import * as React from "react";
import style from "./Factions.module.scss";
import {H2} from "../D_Common/H2/H2";

import imgMobile0 from "../../assets/png/factions/mobile/slide0.png";
import imgMobile1 from "../../assets/png/factions/mobile/slide1.png";
import imgMobile2 from "../../assets/png/factions/mobile/slide2.png";
import imgMobile3 from "../../assets/png/factions/mobile/slide3.png";
import imgMobile4 from "../../assets/png/factions/mobile/slide4.png";

import imgDesktop0 from "../../assets/png/factions/slide0.png";
import imgDesktop1 from "../../assets/png/factions/slide1.png";
import imgDesktop2 from "../../assets/png/factions/slide2.png";
import imgDesktop3 from "../../assets/png/factions/slide3.png";
import imgDesktop4 from "../../assets/png/factions/slide4.png";

import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import clsx from "clsx";
import {AnimatedCircle2} from "../D_Common/AnimatedCircle2/AnimatedCircle2";

const slides = [
    {
        title: "Blue BLoods",
        description: "After the world collapsed, these elites came together to build the perfect, hierarchical city. They would love to have everything under control - and ideally, theirs.",
        beliefs: ["Authority", "Stability", "Loyalty"],
        srcM: imgMobile0,
        srcD: imgDesktop0,
    },
    {
        title: "Mahadeva",
        description: "These warriors want to build a equal society and they will go to war for it. They fight for the small and look after the underprivileged.",
        beliefs: ["Perseverance", "Freedom", "Equity"],
        srcM: imgMobile1,
        srcD: imgDesktop1,
    },
    {
        title: "Hawkins",
        description: "These scientists and creators believe the future of humankind is on another planet. They work hard to get the f out of the earth.",
        beliefs: ["Exploration", "Innovation", "Data"],
        srcM: imgMobile2,
        srcD: imgDesktop2,
    },
    {
        title: "Storung",
        description: "These hustlers will rob or steal from anyone to survive. They might be poor, but they are definitely not boring - they will never miss a chance to have fun.",
        beliefs: ["Flexibility", "Family", "Fun"],
        srcM: imgMobile3,
        srcD: imgDesktop3,
    },
    {
        title: "Leighas",
        description: "These folks see themselves as the the healers of the people and the planet after the apocalypse. They also believe sometimes in order to heal violence must be used.",
        beliefs: ["Optimism", "Kindness", "Unity"],
        srcM: imgMobile4,
        srcD: imgDesktop4,
    },
];


export const Factions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [card, setCard] = useState(0);

    return (
        <section className={style.factions}>
            <H2 titles={["the 5", "factions"]}/>

            <div className={style.mobileSwiper}>
                <Swiper slidesPerView="auto"
                        centeredSlides={true}
                        loop={true}
                        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                        className={style.swiper}
                        spaceBetween={0}
                >
                    {
                        slides.map(({title, description, beliefs, srcM}, index) => (
                            <SwiperSlide key={index}
                                         className={clsx({
                                             [style.slide]: true,
                                             [style.slide_active]: index === currentIndex,
                                         })}
                            >
                                <img src={srcM} alt="" className={clsx({
                                    [style.img]: true,
                                    [style.img_small]: index === 0
                                })}/>

                                <div className={style.content}>

                                    <div>
                                        <p className={style.title} data-aos="flip-left">{title}</p>
                                        <p className={style.description} data-aos="flip-left">{description}</p>
                                    </div>

                                    <div data-aos="flip-left">
                                        <p className={style.beliefs}>Beliefs:</p>
                                        <div className={style.beliefsItems}>
                                            {
                                                beliefs.map((item, index) => (
                                                    <p key={index}>{item}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className={style.cardsDesktop}>
                {
                    slides.map(({title, description, beliefs, srcD}, index) => (
                        <div key={index}
                             className={clsx({
                                 [style.card]: true,
                                 [style.card_open]: index === card,
                             })}
                             onClick={() => setCard(index)}
                        >
                            <div className={style.cardInner}>
                                    <img src={srcD} alt="" className={style.img}/>

                                    <div className={style.content}>
                                        <div>
                                            <p className={style.title} data-aos="flip-left">{title}</p>
                                            <p className={style.description} data-aos="flip-left">{description}</p>
                                        </div>

                                        <div className={style.bottomBlock} data-aos="flip-left">

                                            <p className={style.beliefs}>Beliefs:</p>

                                            <div className={style.beliefsItems}>
                                                {
                                                    beliefs.map((item, index) => (
                                                        <div key={index}
                                                             className={style.item}
                                                        >
                                                            <AnimatedCircle2/>
                                                            <p>{item}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </div>
                                    </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}