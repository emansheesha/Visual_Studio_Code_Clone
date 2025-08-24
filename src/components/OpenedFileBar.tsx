import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { RenderFileIcon } from "./RenderFileIcon";
import { setClickedFile } from "../redux/reducers/fileTreeSlice";
import type { IFile } from "../interfaces";
import { CloseIcon } from "./CloseIcon";

export const OpenedFileBar = () => {
  const state = useSelector((state: RootState) => state.fileTree.openedFiles);
  const clickedFileState = useSelector((state: RootState) => state.fileTree.clickedFile);
  const dispatch = useDispatch();
  const handleClickedFile=(file:IFile)=>{
    dispatch(setClickedFile({fileName : file.name, content : file.content }))
    
    }
  return (
    <div className={`flex gap-4 h-10  ${state.length  && "border-b-1 border-b-gray-400 " } `} >
      {state.map((file) => (
        <div key={file.name} className={`flex gap-2 items-center h-full  border-t-2  p-4
          cursor-pointer
            ${clickedFileState.fileName === file.name ? "border-purple-500" : "border-transparent"}` }
          >
        <div className="flex gap-2" onClick={()=>handleClickedFile(file)}>
          <RenderFileIcon
            filename={file.name}
            isOpen={true}
            isFolder={file.isFolder}
          />
          <div>{file.name}</div>
        
        </div>
          <CloseIcon {...file}/>
    </div>
      ))}
      </div>
  );
};
