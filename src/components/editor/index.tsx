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
        editor={ClassicEditor}
        data={editorData}
        config={{
          placeholder: "",
          toolbar: [
            'paragraph', 'heading1', 'heading2', 'heading3',
            '|',
            {
              label: 'A drop-down with a custom icon',
              icon: 'bold',
              items: ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript']
            },
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
            '|',
            'link', 'imageInsert', 'insertTable',
            '|',
            'alignment',
            'bulletedList', 'numberedList',
            'outdent', 'indent',
            '|',
            'code',
            'blockQuote',
            'horizontalLine',
            '|',
            'removeFormat',
            'findAndReplace',
            'undo', 'redo',
            // 'pageBreak',
            // 'style',
            '|',
            {
              label: '更多',
              items: ['codeBlock', 'htmlEmbed', 'sourceEditing',]
            },
          ],
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
