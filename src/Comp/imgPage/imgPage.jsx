import React, { useContext } from "react";
import { catStates } from "../userSrore/userSrore";

function ImgPage() {
  const context = useContext(catStates);
  const { catState } = context;
  return (
    <div className="Modal ImageView">
      {catState.imgstate ? <img src={catState.imgstate} /> : ""}
    </div>
  );
}

export default ImgPage;
