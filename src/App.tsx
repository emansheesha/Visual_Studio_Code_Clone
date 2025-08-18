import "./App.css";
import { OpenedFileBar } from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/listTree";
function App() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex gap-2">
        <RecursiveComponent {...fileTree} />
        <div className="h-[100vh] w-0.5 bg-white " />
        <OpenedFileBar />
      </div>
    </>
  );
}

export default App;
