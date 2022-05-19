import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

const initialState = {
    burgerMenu: false,
    sound: false,
    comicsModal: false,
    comics: 0,
}

export type InitialStateType = typeof initialState

export const appSlice = createSlice({
    name: "app",
    initialState: initialState as InitialStateType,
    reducers: {
        setBurgerMenu: (state, action: PayloadAction<boolean>) => {
            state.burgerMenu = action.payload;
        },
        setSound: (state, action: PayloadAction<boolean>) => {
            state.sound = action.payload;
        },
        setComicsModal: (state, action: PayloadAction<boolean>) => {
            state.comicsModal = action.payload;
        },
        setComics: (state, action: PayloadAction<number>) => {
            state.comics = action.payload;
        },
    }
})

export const {
    setBurgerMenu,
    setSound,
    setComicsModal,
    setComics,
} = appSlice.actions

export const selectBurgerMenu = (state: RootState) => state.app.burgerMenu;
export const selectSound = (state: RootState) => state.app.sound;
export const selectComicsModal = (state: RootState) => state.app.comicsModal;
export const selectComics = (state: RootState) => state.app.comics;


export const appReducer = appSlice.reducer