import * as React from "react";
import style from "./ComicsModal.module.scss";
import {svgIcons} from "../../assets/svg/svgIcons";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectComics, setComicsModal} from "../../store/appSlice";

import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {Swiper, SwiperSlide} from "swiper/react";

import src0_0 from "../../assets/jpeg/comics view/0/00.jpg";
import src0_1 from "../../assets/jpeg/comics view/0/01.jpg";
import src0_2 from "../../assets/jpeg/comics view/0/02.jpg";
import src0_3 from "../../assets/jpeg/comics view/0/03.jpg";
import src0_4 from "../../assets/jpeg/comics view/0/04.jpg";
import src0_5 from "../../assets/jpeg/comics view/0/05.jpg";

import src1_0 from "../../assets/jpeg/comics view/1/src0.jpg";
import src1_1 from "../../assets/jpeg/comics view/1/src1.jpg";
import src1_2 from "../../assets/jpeg/comics view/1/src2.jpg";
import src2_0 from "../../assets/jpeg/comics view/2/src0.jpg";
import src2_1 from "../../assets/jpeg/comics view/2/src1.jpg";
import src2_2 from "../../assets/jpeg/comics view/2/src2.jpg";
import src3_0 from "../../assets/jpeg/comics view/3/src0.jpg";
import src3_1 from "../../assets/jpeg/comics view/3/src1.jpg";
import src3_2 from "../../assets/jpeg/comics view/3/src2.jpg";
import clsx from "clsx";
import {useState} from "react";

const comicsArray = [
    [src0_0, src0_1, src0_2, src0_3, src0_4, src0_5],
    [src1_0, src1_1, src1_2],
    [src2_0, src2_1, src2_2],
    [src3_0, src3_1, src3_2],
]

export const ComicsModal = () => {
    const dispatch = useAppDispatch();
    const comics = useAppSelector(selectComics);

    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={style.comicsModal}>

            <button className={style.closeBtn}
                    onClick={() => {
                        console.log("click")
                        dispatch(setComicsModal(false));
                    }}
            >
                {svgIcons.close}
            </button>

            <Swiper slidesPerView={1}//"auto"
                    slidesPerGroup={1}
                    centeredSlides={true}
                    loop={true}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                    className={style.swiper}
            >
                {
                    comicsArray[comics].map((slide, index) => (
                        <SwiperSlide key={index}
                                     className={clsx({
                                         [style.slide]: true,
                                         [style.slide_current]: index === currentIndex,
                                     })}
                        >
                            <img src={slide} alt=""/>

                            {/*<div className={style.content}>*/}
                            {/*    {*/}
                            {/*        comicsArray[index].map((src, index) => (*/}
                            {/*            <img key={index} src={src} alt=""/>*/}
                            {/*        ))*/}
                            {/*    }*/}
                            {/*</div>*/}

                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <button className={clsx(style.arrowBtn, style.arrowBtn_Prev)}
                    onClick={() => swiper?.slidePrev()}
            >
                {svgIcons.bigArrow}
            </button>

            <button className={clsx(style.arrowBtn, style.arrowBtn_Next)}
                    onClick={() => swiper?.slideNext()}
            >
                {svgIcons.bigArrow}
            </button>
        </div>
    )
}