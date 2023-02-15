import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
class Editor extends ClassicEditor {}

// Editor configuration.
Editor.defaultConfig = {
  extraPlugins: [],
  plugins: [
    SourceEditing,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Autosave,
    FileRepository,
    Autoformat,
    BlockQuote,
    Bold,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageInsert,
    ImageResize,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    TodoList,
    Paragraph,
    Table,
    TableToolbar,
    Alignment,
    AutoImage,
    AutoLink,
    Essentials,
    FindAndReplace,
    Font,
    Highlight,
    HorizontalLine,
    HtmlEmbed,
    Mention,
    PasteFromOffice,
    PictureEditing,
    RemoveFormat,
    Strikethrough,
    Subscript,
    Superscript,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TextTransformation,
    Underline,
    WordCount,
  ],
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'findAndReplace',
      '|',
      'heading',
      '|',
      'removeFormat',
      'bold',
      'italic',
      'strikethrough',
      'underline',
      // 'code',
      // 'subscript',
      // 'superscript',
      // 'horizontalLine',
      '|',
      // 'highlight',
      'fontSize',
      'fontFamily',
      'fontColor',
      '|',
      'link',
      // 'blockQuote',
      'insertTable',
      'ImageInsert',
      // 'codeBlock',
      // 'htmlEmbed',
      'SourceEditing',
      '|',
      'bulletedList',
      'numberedList',
      // 'todoList',
      '|',
      'outdent',
      'indent',
      'alignment',
    ],
    shouldNotGroupWhenFull: true,
  },
  fontFamily: {
    options: [
      '宋体, SimSun, Songti SC, ',
      '黑体, SimHei, STHeiti',
      '楷体, KaiTi, STKaiti',
      '仿宋, FangSong, STFangsong',
      '微软雅黑, Microsoft Yahei, Hiragino Sans GB',
    ],
  },
  fontSize: {
    options: [12, 14, 16, 18, 20, 22, 24, 28, 32, 34, 36],
    supportAllValues: true,
  },
  htmlEmbed: {
    showPreviews: true,
  },
  image: {
    styles: ['alignCenter', 'alignLeft', 'alignRight'],
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Original',
        value: null,
      },
      {
        name: 'resizeImage:50',
        label: '50%',
        value: '50',
      },
      {
        name: 'resizeImage:75',
        label: '75%',
        value: '75',
      },
    ],
    toolbar: [
      'imageTextAlternative',
      'toggleImageCaption',
      '|',
      'imageStyle:inline',
      'imageStyle:wrapText',
      'imageStyle:breakText',
      'imageStyle:side',
      '|',
      'resizeImage',
    ],
    insert: {
      integrations: ['insertImageViaUrl'],
    },
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  link: {
    decorators: {
      addTargetToExternalLinks: true,
      defaultProtocol: 'https://',
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'file',
        },
      },
    },
  },
  mention: {
    feeds: [
      {
        marker: '@',
        feed: [
          '@apple',
          '@bears',
          '@brownie',
          '@cake',
          '@cake',
          '@candy',
          '@canes',
          '@chocolate',
          '@cookie',
          '@cotton',
          '@cream',
          '@cupcake',
          '@danish',
          '@donut',
          '@dragée',
          '@fruitcake',
          '@gingerbread',
          '@gummi',
          '@ice',
          '@jelly-o',
          '@liquorice',
          '@macaroon',
          '@marzipan',
          '@oat',
          '@pie',
          '@plum',
          '@pudding',
          '@sesame',
          '@snaps',
          '@soufflé',
          '@sugar',
          '@sweet',
          '@topping',
          '@wafer',
        ],
        minimumCharacters: 1,
      },
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
      'toggleTableCaption',
    ],
  },
  language: 'zh-cn',
};

export default Editor;
