import { useState } from "react";
import type { IFile } from "../interfaces";
import { RightArrow } from "./SVG/RightArrow";
import { BottomArrow } from "./SVG/BottomArrow";
import { RenderFileIcon } from "./RenderFileIcon";

const RecursiveComponent = (fileTrees: IFile) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleFolder = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="ms-2 my-2">
      <div className="flex gap-2 ms-2 cursor-pointer">
        {fileTrees.isFolder ? (
          <div className="flex gap-1 items-center" onClick={handleToggleFolder}>
            {isOpen ? <BottomArrow /> : <RightArrow />}
            <RenderFileIcon filename={fileTrees.name}/>
          </div>
        ) : (
          <RenderFileIcon filename={fileTrees.name}/>
        )}

        <span>{fileTrees.name}</span>
      </div>
      {fileTrees.children &&
        fileTrees.children?.map((file: IFile, _idx) => {
          return (
            <>
              {fileTrees.children &&
              fileTrees.children?.length > 0 &&
              isOpen ? (
                <RecursiveComponent {...file} key={_idx} />
              ) : null}
            </>
          );
        })}
    </div>
  );
};
export default RecursiveComponent;
