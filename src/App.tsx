import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/listTree";
function App() {
  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        <RecursiveComponent {...fileTree} />
      </div>
    </>
  );
}

export default App;
