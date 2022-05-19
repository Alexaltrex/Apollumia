import * as React from "react";
import style from "./TheBrokenWorld.module.scss"
import {H2} from "../D_Common/H2/H2";

import slide0 from "../../assets/png/slide0.png";
import slide1 from "../../assets/png/slide1.png";
import {useState} from "react";

import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {Swiper, SwiperSlide} from "swiper/react";
import {CountInfo} from "../D_Common/CountInfo/CountInfo";
import {SwiperControl} from "../D_Common/SwiperControl/SwiperControl";

const slides = [
    slide0,
    slide1,
    slide0,
    slide1,
    slide0,
    slide1,
    slide0,
    slide1,
    slide0,
    slide1,
];

export const TheBrokenWorld = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className={style.theBrokenWorld}>

            <H2 titles={["our", "vision"]}/>

            <p className={style.description} data-aos="flip-left">
                Build an immersive blockchain gaming experience that’s actually <span>fun to play</span>.

                {/*<span>Earth, 2799.</span> The world barely survived the <span>Yellowstone Apocalypse.</span> Humans, now*/}
                {/*divided into <span>5 factions</span>, fight over lands, resources and the power to decide*/}
                {/*the <span>future</span> of mankind.*/}
            </p>

            <div className={style.swiperBlock}>

                <CountInfo currentIndex={currentIndex + 1}
                           totalCount={slides.length}
                />

                <Swiper slidesPerView="auto"
                        slidesPerGroup={1}
                        centeredSlides={true}
                        loop={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                        className={style.swiper}
                        breakpoints={{
                            0: {
                                spaceBetween: 20,
                            },
                            1440: {
                                spaceBetween: 24,
                            },
                        }}
                >
                    {
                        slides.map((slide, index) => (
                            <SwiperSlide key={index}
                                         className={style.slide}
                            >
                                <img src={slide} alt=""/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className={style.control}>
                    <SwiperControl disabledLeft={
                        false
                        //currentIndex === 0
                    }
                                   disabledRight={
                                       false
                                       //currentIndex === slides.length - 1
                                   }
                                   onClickLeft={() => swiper?.slidePrev()}
                                   onClickRight={() => swiper?.slideNext()}

                    />
                </div>


            </div>

        </section>
    )
}