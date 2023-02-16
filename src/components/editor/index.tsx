import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build";
import UploadAdapter from "../../utils/upload-adapter";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

const toolbarItems: string[] = [
  "heading",
  "|",
  "removeFormat",
  "bold",
  "italic",
  "strikethrough",
  "underline",
  "|",
  "bulletedList",
  "numberedList",
  "|",
  "outdent",
  "indent",
  "alignment",
  "|",
  "findAndReplace",
  "|",
  "fontSize",
  "fontFamily",
  "fontColor",
  "|",
  "link",
  "insertTable",
  "ImageInsert",
  "|",
  "undo",
  "redo",
  "|",
  "SourceEditing",
];

interface IProps {
  className?: string;
  data?: string;
}

const Editor = forwardRef<string, IProps>((props, ref) => {
  const { className, data } = props;
  const [editorData, setEditorData] = useState("");
  useImperativeHandle(ref, () => editorData, [editorData]);

  useEffect(() => {
    data && setEditorData(data);
  }, [data]);

  return (
    <div className={className} style={{ color: "black" }}>
      <CKEditor
        editor={ClassicEditor.Editor}
        data={editorData}
        config={{
          placeholder: "",
          toolbar: {
            // items: toolbarItems,
            shouldNotGroupWhenFull: false,
          },
        }}
        onReady={(editor) => {
          const editorRoot = editor.editing.view.document.getRoot();
          editor.editing.view.change((writer: { setStyle: (arg0: string, arg1: string, arg2: any) => void; }) => {
            if (editorRoot) {
              writer.setStyle("height", "580px", editorRoot);
            }
          });
          UploadAdapter(editor);
          if (!import.meta.env.PROD) {
            CKEditorInspector.attach(editor);
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          if (!data) {
            return;
          }
          setEditorData(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
});

Editor.displayName = "Editor";

export default Editor;
