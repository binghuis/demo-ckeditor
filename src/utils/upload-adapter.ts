import ClassicEditor from "@songbinghui/ckeditor5";

class CustomUploadAdapter {
  loader: any;
  constructor(loader: any) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file: File) =>
        new Promise((resolve, reject) => {
          // 在这里执行上传接口，并返回图片 URL 地址
          setTimeout(() => {
            resolve({
              default: `https://ckeditor.com/assets/images/webp/illustration/home-editor-colabo-83272446bf.webp`,
            });
          }, 3000);
          // if error reject
        })
    );
  }

  abort() {
    // 执行请求取消逻辑，不需要封装 axios 实例
    // if (controller) {
    //   controller.abort();
    // }
  }
}

export default function UploadAdapter(editor: typeof ClassicEditor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new CustomUploadAdapter(loader);
  };
}
