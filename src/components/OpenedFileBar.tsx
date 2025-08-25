import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { RenderFileIcon } from "./RenderFileIcon";
import { setClickedFile } from "../redux/reducers/fileTreeSlice";
import type { IFile } from "../interfaces";
import { CloseIcon } from "./CloseIcon";
import { useState } from "react";
import { DropMenu } from "./ui/DropMenu";

export const OpenedFileBar = () => {
  const [positionState, setPositionState] = useState({ x: 0, y: 0 });
  const [targetFile, setTargetFile] = useState<string>("")
  const [showMenu, setShowMenu] = useState(false);
  const state = useSelector((state: RootState) => state.fileTree.openedFiles);
  const clickedFileState = useSelector(
    (state: RootState) => state.fileTree.clickedFile
  );
  const dispatch = useDispatch();
  const handleClickedFile = (file: IFile) => {
    dispatch(setClickedFile({ fileName: file.name, content: file.content }));
  };
  return (
    <div
      className={`flex gap-4 h-10  ${
        state.length && "border-b-1 border-b-gray-400 "
      } `}
      onContextMenu={(e:any) => {
        console.log(e.target["__reactProps$5i0v5qz91as"].children);
       setTargetFile(e.target["__reactProps$5i0v5qz91as"].children)
        e.preventDefault();
        console.log(showMenu);

        setShowMenu(true);
        setPositionState({ x: e.clientX, y: e.clientY });
      }}
    >
      {state.map((file) => (
        <div
          key={file.name}
          className={`flex gap-2 items-center h-full  border-t-2  p-4
          cursor-pointer
            ${
              clickedFileState.fileName === file.name
                ? "border-purple-500"
                : "border-transparent"
            }`}
        >
          <div className="flex gap-2" onClick={() => handleClickedFile(file)}>
            <RenderFileIcon
              filename={file.name}
              isOpen={true}
              isFolder={file.isFolder}
            />
            <div>{file.name}</div>
          </div>
          <CloseIcon {...file} />
          {showMenu && <DropMenu position={positionState} 
          setShowMenu= {setShowMenu} targetFile={targetFile}/>}
        </div>
      ))}
    </div>
  );
};
