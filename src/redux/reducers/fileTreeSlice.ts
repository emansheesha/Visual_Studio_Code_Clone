import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IFile } from '../../interfaces'
export interface IClickedFile {
    fileName: string;
    content: string | undefined
}
export interface FileTreeState {
    openedFiles: IFile[],
    clickedFile: IClickedFile,


}

const initialState: FileTreeState = {
    openedFiles: [],
    clickedFile: {
        fileName: "",
        content: ""
    },
}

export const fileTreeSlice = createSlice({
    name: 'fileTree',
    initialState,
    reducers: {
        setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
            state.openedFiles = action.payload;

        },
        setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile = action.payload;
        },
        setClaseTab: (state, action: PayloadAction<IFile[]>) => {
            state.openedFiles = action.payload;
        },
        setClaseAll: (state) => {
            state.openedFiles = [];
        },

    },
})

export const { setOpenedFiles, setClickedFile, setClaseTab, setClaseAll } = fileTreeSlice.actions

export default fileTreeSlice.reducer