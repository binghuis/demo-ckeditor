import { useRef } from "react";
import "./App.css";
import Editor from "./components/editor";

function App() {
  const editorRef = useRef("");

  return (
    <div className="App">
      <Editor ref={editorRef}  />
      {editorRef.current}
    </div>
  );
}

export default App;
