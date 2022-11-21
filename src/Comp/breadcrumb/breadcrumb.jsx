/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { apiList } from "../api/api";
import { catStates } from "../userSrore/userSrore";

function Breadcrumb() {
  const context = useContext(catStates);
  const { catState, setCatState } = context;

  const handleBackRoot = async () => {
    const list = await apiList();

    setCatState({
      ...catState,
      nodes: list,
      depth: [],
      isRoots: false,
    });
  };

  const handleBackDirectory = (e) => {
    const backDirectory = async () => {
      const nodeId = e.target.dataset.id;
      const list = await apiList(nodeId);
      let lastIndex = Number(e.target.dataset.index) + 1;
      const depthIndex = catState.depth.slice(0, lastIndex);
      console.log(lastIndex);
      console.log(depthIndex);

      setCatState({
        ...catState,
        nodes: list,
        depth: depthIndex,
      });
    };

    return e.target.dataset.index === catState.depth.length
      ? ""
      : backDirectory();
  };

  return (
    <nav
      className="Breadcrumb"
      css={css`
        height: 62px;
        padding: 16px;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-direction: row;
        > div {
          padding: 4px;
        }
      `}
    >
      <div
        className="nav-item"
        css={css`
          padding: 4px;

          content: " -";

          content: "";
        `}
        onClick={handleBackRoot}
      >
        Root
      </div>
      {catState.depth.length > 0
        ? catState.depth.map((e, index) => {
            return (
              <div
                data-id={e.id}
                data-index={index}
                key={index}
                onClick={handleBackDirectory}
              >
                {e.name}
              </div>
            );
          })
        : ""}
    </nav>
  );
}

export default Breadcrumb;
