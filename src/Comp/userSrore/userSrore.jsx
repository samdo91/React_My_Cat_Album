import React, { createContext, useState } from "react";

export const catStates = createContext();

function UserSrore(props) {
  const [catState, setCatState] = useState({
    isRoots: false,
    depth: [],
    nodes: [],
    imgstate: null,
    isLoading: false,
  });

  return (
    <catStates.Provider value={{ catState, setCatState }}>
      {props.children}
    </catStates.Provider>
  );
}

export default UserSrore;
