import catMig from "../../assets/nyan-cat.gif";

function LoadingPage(props) {
  const { catState } = props;

  return (
    <div>
      {catState.isLoading ? (
        <div>
          <img src={catMig} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoadingPage;
