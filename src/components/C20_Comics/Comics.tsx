import * as React from "react";
import style from "./Comics.module.scss"
import {H2} from "../D_Common/H2/H2";

import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import {CountInfo} from "../D_Common/CountInfo/CountInfo";

import src0 from "../../assets/jpeg/comics/src0.jpg";
import src1 from "../../assets/jpeg/comics/src1.jpg";
import src2 from "../../assets/jpeg/comics/src2.jpg";
import src3 from "../../assets/jpeg/comics/src3.jpg";

import clsx from "clsx";
import {SwiperControl} from "../D_Common/SwiperControl/SwiperControl";
import {svgIcons} from "../../assets/svg/svgIcons";
import {useAppDispatch} from "../../store/hooks";
import {setComics, setComicsModal } from "../../store/appSlice";

const slides = [src0, src1, src2, src3];

export const Comics = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useAppDispatch();

    return (
        <section className={style.comics}>

            <H2 titles={["comics"]}/>

            <div className={style.content}>

                <CountInfo currentIndex={currentIndex + 1}
                           totalCount={slides.length}
                           data-aos="zoom-in-right"
                />

                <div className={style.swiperWrapper}>

                    <Swiper slidesPerView="auto"
                            slidesPerGroup={1}
                            centeredSlides={true}
                            onSwiper={(swiper) => setSwiper(swiper)}
                            onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                            className={style.swiper}
                    >
                        {
                            slides.map((slide, index) => (
                                <SwiperSlide key={index}
                                             className={clsx({
                                                 [style.slide]: true,
                                                 [style.slide_active]: index === currentIndex,
                                             })}
                                             onClick={() => {
                                                 if (index === currentIndex) {
                                                     dispatch(setComicsModal(true));
                                                     dispatch(setComics(index));
                                                 }

                                             }}
                                >
                                    <img src={slide} alt=""/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <div className={style.frameIcon}>{svgIcons.comicsFrame}</div>

                </div>



                <SwiperControl disabledLeft={currentIndex === 0}
                               disabledRight={currentIndex === slides.length - 1}
                               onClickLeft={() => swiper?.slidePrev()}
                               onClickRight={() => swiper?.slideNext()}
                               className={style.control}
                               data-aos="flip-up"
                />

            </div>

        </section>
    )
}