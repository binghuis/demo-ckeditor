/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import DocumentList from '@ckeditor/ckeditor5-list/src/documentlist.js';
import DocumentListProperties from '@ckeditor/ckeditor5-list/src/documentlistproperties.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js';
import HtmlComment from '@ckeditor/ckeditor5-html-support/src/htmlcomment.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';

class Editor extends ClassicEditor { }

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BlockQuote,
	Bold,
	Code,
	DocumentList,
	DocumentListProperties,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	HtmlComment,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	Markdown,
	Mention,
	Paragraph,
	ParagraphButtonUI,
	PasteFromOffice,
	RemoveFormat,
	SourceEditing,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	WordCount,
	Heading,
	HeadingButtonsUI
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'blockQuote',
			'insertTable',
			'undo',
			'redo',
			'alignment',
			'code',
			'findAndReplace',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'imageInsert',
			'removeFormat',
			'sourceEditing',
			'subscript',
			'strikethrough',
			'superscript',
			'underline'
		]
	},
	language: 'zh-cn',
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
	fontFamily: {
		options: [
			'宋体, SimSun, Songti SC',
			'黑体, SimHei, STHeiti',
			'楷体, KaiTi, STKaiti',
			'仿宋, FangSong, STFangsong',
			'微软雅黑, Microsoft Yahei, Hiragino Sans GB',
		],
	},
	htmlEmbed: {
		showPreviews: true,
	},
	fontSize: {
		options: [12, 14, 16, 18, 20, 22, 24, 28, 32, 34, 36],
		supportAllValues: true,
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

};

export default Editor;
