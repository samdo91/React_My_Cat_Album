import catMig from "../../assets/nyan-cat.gif";
import React, { useContext } from "react";
import { catStates } from "../userSrore/userSrore";

function LoadingPage() {
  const context = useContext(catStates);
  const { catState } = context;

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
