function ImgPage(props) {
  const { catState, setCatState } = props;

  return (
    <div className="Modal ImageView">
      {catState.imgstate ? <img src={catState.imgstate} /> : ""}
    </div>
  );
}

export default ImgPage;
