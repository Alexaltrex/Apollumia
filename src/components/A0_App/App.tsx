import React, {useEffect, useState} from 'react';
import style from "./app.module.scss"
import {Header} from "../A1_Header/Header";
import {Route, Routes} from "react-router-dom";
import {Footer} from "../A2_Footer/Footer";
import {HomePage} from "../B0_HomePage/HomePage";
import {BurgerMenu} from "../A3_BurgerMenu/BurgerMenu";
import {useAppSelector} from "../../store/hooks";
import {selectBurgerMenu, selectComicsModal} from "../../store/appSlice";
import clsx from "clsx";
import {ComicsPage} from "../B1_ComicsPage/ComicsPage";
import {RoadmapPage} from "../B2_RoadmapPage/RoadmapPage";
import {ComicsModal} from "../C21_ComicsModal/ComicsModal";
import {throttle} from "../helper/throttle";
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
    const burgerMenu = useAppSelector(selectBurgerMenu);
    const comicsModal = useAppSelector(selectComicsModal);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    const onMouseMoveThrottle = throttle(onMouseMoveHandler, 50);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            //once: true,
        });
        AOS.refresh()
    }, []);

    return (
        <div className={clsx({
            [style.app]: true,
            [style.app_menu]: burgerMenu || comicsModal,
        })}
             id="top"
             onMouseMove={onMouseMoveThrottle}
        >

            <div className={style.gradientMaskWrapper}>
                <div className={style.gradientMask}
                     style={{
                         top: `${y - 2500}px`,
                         left: `${x - 2500}px`,
                     }}
                />
            </div>

            <Header/>

            <BurgerMenu/>

            <div className={clsx({
                [style.content]: true,
                [style.content_blur]: comicsModal,
            })}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/comics" element={<ComicsPage/>}/>
                    <Route path="/roadmap" element={<RoadmapPage/>}/>
                </Routes>
            </div>

            {comicsModal && <ComicsModal/>}

            <Footer/>
        </div>
    );
}

