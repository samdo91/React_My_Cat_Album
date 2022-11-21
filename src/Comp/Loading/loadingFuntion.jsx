import React, { useContext } from "react";
import { catStates } from "../userSrore/userSrore";
const loadingFuntion = (loadingState) => {
  const context = useContext(catStates);

  const { catState, setCatState } = context;
  setCatState({
    ...catState,
    isLoading: loadingState,
  });
};
