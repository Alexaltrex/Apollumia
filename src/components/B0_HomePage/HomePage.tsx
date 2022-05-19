import * as React from "react";
import {TheUtility} from "../C11_TheUtility/TheUtility";
import {TheGame} from "../C12_TheGame/TheGame";
import {TheBrokenWorld} from "../C13_TheBrokenWorld/TheBrokenWorld";
import {FreeToPlay} from "../C14_FreeToPlay/FreeToPlay";
import {Factions} from "../C15_Factions/Factions";
import {Play} from "../C16_Play/Play";
import {ReadTheComics} from "../C17_ReadTheComics/ReadTheComics";
import {NftGenesis} from "../C10_NftGenesis/NftGenesis";

export const HomePage = () => {
    return (
        <>
            <NftGenesis/>

            <TheUtility/>

            <TheGame/>

            <TheBrokenWorld/>

            <FreeToPlay/>

            <Factions/>

            <Play/>

            <ReadTheComics/>
        </>
    )
}