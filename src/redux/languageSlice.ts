import {createSlice} from "@reduxjs/toolkit";
import {getLangFromStorage, setLangInStorage} from "../utils/common";

const lang = getLangFromStorage();
interface IState {
    language: string;
}
export const initialState: IState = {
    language: lang || 'En',
}
const sliceName = 'language';
const languageSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        changeCurrentLanguage: (state, action) => {
            state.language = action.payload;
            setLangInStorage(action.payload);
        }
    }
})
export default languageSlice.reducer;
export const {changeCurrentLanguage} = languageSlice.actions;