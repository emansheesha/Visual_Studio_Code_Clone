import { Fragment, useState } from "react";
import type { IFile } from "../interfaces";
import { RightArrow } from "./SVG/RightArrow";
import { BottomArrow } from "./SVG/BottomArrow";
import { RenderFileIcon } from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setOpenedFiles } from "../redux/reducers/fileTreeSlice";

const RecursiveComponent = (fileTrees: IFile) => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector((state: RootState) => state.fileTree.openedFiles);
  const dispatch = useDispatch();

  const handleToggleFolder = (name: string, isFolder: boolean) => {
    setIsOpen((prev) => !prev);
    dispatch(
      setOpenedFiles(
        state.find((file: any) => file.name === name)
          ? state
          : [...state, { name: name, isFolder: isFolder }]
      )
    );
  };
  console.log(state);

  return (
    <div className="ms-2 my-2">
      <div className="flex gap-2 ms-2 cursor-pointer">
        {fileTrees.isFolder ? (
          <div
            className="flex gap-1 items-center"
            onClick={() =>
              handleToggleFolder(fileTrees.name, fileTrees.isFolder)
            }
          >
            {isOpen ? <BottomArrow /> : <RightArrow />}
            <RenderFileIcon
              filename={fileTrees.name}
              isOpen={isOpen}
              isFolder={fileTrees.isFolder}
            />
          </div>
        ) : (
          <div
            className="flex gap-1 items-center"
            onClick={() =>
              dispatch(
                setOpenedFiles(
                  state.find((file: any) => file.name === fileTrees.name)
                    ? state
                    : [
                        ...state,
                        { name: fileTrees.name, isFolder: fileTrees.isFolder },
                      ]
                )
              )
            }
          >
            <RenderFileIcon
              filename={fileTrees.name}
              isOpen={isOpen}
              isFolder={fileTrees.isFolder}
            />
          </div>
        )}

        <span>{fileTrees.name}</span>
      </div>
      {fileTrees.children &&
        fileTrees.children?.map((file: IFile, _idx) => {
          return (
            <Fragment key={_idx}>
              {fileTrees.children &&
              fileTrees.children?.length > 0 &&
              isOpen ? (
                <RecursiveComponent {...file} key={_idx} />
              ) : null}
            </Fragment>
          );
        })}
    </div>
  );
};
export default RecursiveComponent;
