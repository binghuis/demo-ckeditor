
const EditorView = (props: { data: string }) => {
  return (
    <div className="ck-content ">
      <div dangerouslySetInnerHTML={{ __html: props.data }}></div>
    </div>
  );
};
export default EditorView;
