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

        
    },
})

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions

export default fileTreeSlice.reducer