import { useRef } from "react";
import "./App.css";
import Editor from "./components/editor";

function App() {
  const editorRef = useRef("");

  return (
    <div className="App">
      <Editor ref={editorRef}  />
    </div>
  );
}

export default App;
