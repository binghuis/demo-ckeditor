import { CKEditor } from "@ckeditor/ckeditor5-react";
import CustomEditor from "ckeditor5-custom-build";
import ClassicEditor from "ckeditor__ckeditor5-build-classic";
import UploadAdapter from "../../utils/upload-adapter";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import EditorView from "../editor-view";

const toolbarItems = [
  "paragraph",
  "heading1",
  "heading2",
  "heading3",
  "|",
  {
    label: "文本样式",
    icon: "bold",
    items: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "subscript",
      "superscript",
    ],
  },
  "fontSize",
  "fontFamily",
  "fontColor",
  "fontBackgroundColor",
  "|",
  "link",
  "imageInsert",
  "insertTable",
  "|",
  "alignment",
  "bulletedList",
  "numberedList",
  "outdent",
  "indent",
  "|",
  "code",
  "blockQuote",
  "horizontalLine",
  "|",
  "removeFormat",
  "findAndReplace",
  "undo",
  "redo",
  // 'pageBreak',
  // 'style',
  "|",
  {
    label: "更多",
    items: ["codeBlock", "|", "htmlEmbed", "|", "sourceEditing"],
  },
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
    <div className={`${className} text-black`}>
      <EditorView data={editorData} />
      <CKEditor
        editor={CustomEditor}
        data={editorData}
        config={{
          placeholder: "",
          autosave: {
            save(editor: ClassicEditor) {
              // The saveData() function must return a promise
              // which should be resolved when the data is successfully saved.
              return new Promise<void>((resolved, reject) => {
                console.log("自动保存", editor.getData());
                resolved();
              });
            },
          },
          toolbar: {
            items: toolbarItems,
          },
        }}
        onReady={(editor: ClassicEditor) => {
          const editorRoot = editor.editing.view.document.getRoot();
          editor.editing.view.change((writer) => {
            if (editorRoot) {
              writer.setStyle("height", "580px", editorRoot);
            }
          });
          UploadAdapter(editor);
          if (!import.meta.env.PROD) {
            CKEditorInspector.attach(editor);
          }
        }}
        onChange={(event: any, editor: ClassicEditor) => {
          const data = editor.getData();
          if (!data) {
            return;
          }
          setEditorData(data);
        }}
        onBlur={(event: any, editor: ClassicEditor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event: any, editor: ClassicEditor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
});

Editor.displayName = "Editor";

export default Editor;
