import { Header } from "./components/Header";
import { Editor } from "./components/editor/Editor";

function App() {
  return (
    <>
      <div className="text-1xl">
        <Header></Header>
        <Editor></Editor>
      </div>
    </>
  );
}

export default App;
