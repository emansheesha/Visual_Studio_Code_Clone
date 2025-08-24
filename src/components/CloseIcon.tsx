import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import type { RootState } from "../redux/store";
import {
  setClickedFile,
  setOpenedFiles,
} from "../redux/reducers/fileTreeSlice";

export const CloseIcon = (closedFile:IFile) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.fileTree.openedFiles);
  const clickedstate = useSelector((state: RootState) => state.fileTree.clickedFile);
  const handleTabRemove = () => {
    const filtered = state.filter((file: IFile) =>
        closedFile.name !== file.name
    )
    dispatch(
      setOpenedFiles(
        filtered
      )
    );
    
    clickedstate.fileName === closedFile.name ? 
    filtered.length-1 ? 
    dispatch(setClickedFile({fileName:'', content:''})) : dispatch(setClickedFile({fileName:filtered[filtered.length-1].name, content:filtered[filtered.length-1].content})) 
    : null;
  };
console.log(state);

  return <div onClick={handleTabRemove}>x</div>;
};
