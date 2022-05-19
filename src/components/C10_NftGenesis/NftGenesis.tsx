import * as React from "react";
import style from "./NftGenesis.module.scss";

import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import {CountInfo} from "../D_Common/CountInfo/CountInfo";
import {SwiperControl} from "../D_Common/SwiperControl/SwiperControl";
import {ButtonEllipse} from "../D_Common/ButtonEllipse/ButtonEllipse";

import frame from "../../assets/png/nft genesis/frame.png";
import src0 from "../../assets/png/nft genesis/src0.png";
import src1 from "../../assets/png/nft genesis/src1.png";
import src2 from "../../assets/png/nft genesis/src2.png";
import clsx from "clsx";

const slides = [src0, src1, src2, src0, src1, src2];

export const NftGenesis = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className={style.nftGenesis}>

            <div className={style.sliderBlock}>

                <div className={style.border}/>

                {/*<img src={frame} alt="" className={style.frame}/>*/}

                <CountInfo currentIndex={currentIndex + 1}
                           totalCount={slides.length}
                           className={style.countInfo}
                           data-aos="fade-left"
                />

                <Swiper slidesPerView="auto"
                        slidesPerGroup={1}
                        loop={true}
                        centeredSlides={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                        className={style.swiper}
                        breakpoints={{
                            0: {
                                spaceBetween: 24,
                            },
                            1440: {
                                spaceBetween: 35,
                            },
                        }}
                >
                    {
                        slides.map((src, index) => (
                                <SwiperSlide key={index}
                                             className={clsx({
                                                 [style.slide]: true,
                                                 [style.slide_active]: index === currentIndex,
                                             })}
                                >
                                    <img src={src} alt=""/>
                                </SwiperSlide>
                            )
                        )
                    }
                </Swiper>

                <SwiperControl disabledLeft={
                    //currentIndex === 0
                    false
                }
                               disabledRight={
                                   //currentIndex === slides.length - 1
                                   false
                               }
                               onClickLeft={() => swiper?.slidePrev()}
                               onClickRight={() => swiper?.slideNext()}
                               className={style.control}
                               data-aos="fade-left"
                />

            </div>

            <div className={style.titleBlock}>

                <h1 className={style.titleMobile}>nft Genesis</h1>
                <h1 className={style.titleDesktop} data-aos="fade-right">
                    <p>nft</p>
                    <p>Genesis</p>
                </h1>

                <p className={style.description} data-aos="flip-left">
                    Become one of the first <span>10,000</span> survivors in Apollumia.
                </p>

                <ButtonEllipse label="mint now"
                               className={style.mintBtn}
                               //data-aos="fade-left"
                />

            </div>


        </section>
    )
}