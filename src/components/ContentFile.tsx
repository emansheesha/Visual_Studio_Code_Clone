import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
export const ContentFile = () => {
  const clickedFileState = useSelector(
    (state: RootState) => state.fileTree.clickedFile
  );
  console.log(clickedFileState);
   
  return (
    <div className="text-start mt-6 mx-4">
      {clickedFileState.content ? (
        <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{background: "transparent"}}>
          {clickedFileState.content}
        </SyntaxHighlighter>
      ) : null}
    </div>
  );
};
