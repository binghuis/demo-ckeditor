declare module '@ckeditor/ckeditor5-react' {
  import Event from '@ckeditor/ckeditor5-utils/src/eventinfo';
  import ClassicEditor from '@types/ckeditor__ckeditor5-editor-classic/src/classiceditor';
  import { EditorConfig } from '@types/ckeditor__ckeditor5-core/src/editor/editorconfig';
  import * as React from 'react';
  interface CKEditorProps {
    disabled?: boolean;
    editor: ClassicEditor;
    data?: string;
    id?: string;
    config?: EditorConfig;
    onReady?: (editor: ClassicEditor) => void;
    onChange?: (event: Event, editor: ClassicEditor) => void;
    onBlur?: (event: Event, editor: ClassicEditor) => void;
    onFocus?: (event: Event, editor: ClassicEditor) => void;
    onError?: (event: Event, editor: ClassicEditor) => void;
  }
  const CKEditor: React.FC<CKEditorProps>;
  export { CKEditor };
}

declare module '@songbinghui/ckeditor5' {
  import ClassicEditor from '@types/ckeditor__ckeditor5-editor-classic/src/classiceditor';
  const Editor: ClassicEditor;
  export default Editor;
}

declare module '@ckeditor/ckeditor5-inspector';
