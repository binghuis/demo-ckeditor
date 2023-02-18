import "./content-styles.css";

const ContentView = (props: { data: string }) => {
  return (
    <div className="ck-content">
      <div dangerouslySetInnerHTML={{ __html: props.data }}></div>
    </div>
  );
};
export default ContentView;
