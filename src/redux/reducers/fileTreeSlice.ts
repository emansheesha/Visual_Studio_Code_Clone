import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IFile } from '../../interfaces'

export interface FileTreeState {
    openedFiles: IFile[],
    clickedFile :{
        fileName: "",
        content: ""}
    }

const initialState: FileTreeState = {
    openedFiles: [],
    clickedFile :{
    fileName: "",
    content: ""}
}

export const fileTreeSlice = createSlice({
    name: 'fileTree',
    initialState,
    reducers: {
        setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
            state.openedFiles = action.payload
          },
    },
})

export const { setOpenedFiles} = fileTreeSlice.actions

export default fileTreeSlice.reducer