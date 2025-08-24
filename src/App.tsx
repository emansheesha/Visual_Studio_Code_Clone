import { useSelector } from "react-redux";
import "./App.css";
import { ContentFile } from "./components/ContentFile";
import { OpenedFileBar } from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/listTree";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import type { RootState } from "./redux/store";

function App() {
  const state = useSelector((state: RootState) => state.fileTree.openedFiles);
  const defaultLayout = [20,80];
  const onLayout = (sizes: number[]) =>{
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`

  }
  return (
    <>
      <div className="h-[100vh] w-[100vw] ">
        <div className="flex h-full">
          <PanelGroup onLayout={onLayout} direction="horizontal">
            <Panel defaultSize={defaultLayout[0]}>
              <RecursiveComponent {...fileTree} />
            </Panel>
            <PanelResizeHandle className="bg w-0.25 h-[100vh] bg-gray-500"/>
             <Panel defaultSize={defaultLayout[1]}>
             {state.length ? <>
               <OpenedFileBar />
                <ContentFile /> 
               </> : <img src="/assets/icons/visualstudio.svg" className="w-full h-full"/>}
            </Panel> 
          </PanelGroup>
        </div>
      </div>
    </>
  );
}

export default App;
