import ReactLoading from "react-loading";

const divStyle = {
  width: "100vw",
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Loading() {
  return (
    <div style={divStyle}>
      <ReactLoading color="var(--primary-color)" type="spinningBubbles" />
    </div>
  );
}

export default Loading;
