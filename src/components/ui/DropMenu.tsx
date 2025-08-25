import { useDispatch, useSelector } from "react-redux";
import { setClaseAll, setClaseTab } from "../../redux/reducers/fileTreeSlice";
import type { IFile } from "../../interfaces";
import type { RootState } from "../../redux/store";
import { useEffect, useRef } from "react";
interface IPosition {
  x: number;
  y: number;
}
export const DropMenu = ({
  position,
    setShowMenu,
  targetFile
}: {
  position: IPosition;
  setShowMenu: (state: boolean) => void;
  targetFile:IFile
}) => {
  const state = useSelector((files: RootState) => files.fileTree.openedFiles);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const handleClosetab = () => {
    console.log(state[0].name , targetFile);
    
    dispatch(
      setClaseTab(state.filter((prev) => prev.name !== targetFile))
    );
  };
  const handleCloseAlltabs = () => {
    dispatch(setClaseAll());
  };
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setShowMenu(false);
    };
    window.addEventListener("click", handleClickOutSide);
    return () => window.addEventListener("click", handleClickOutSide);
  }, [setShowMenu]);
  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black rounded-md py-2 px-6 w-fit cursor-pointer text-start"
        style={{ position: "absolute", left: position.x, top: position.y }}
      >
        <li onClick={handleClosetab}>Close</li>

        <li onClick={handleCloseAlltabs}>Close All</li>
      </ul>
    </div>
  );
};
