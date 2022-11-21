/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext } from "react";
import backArrow from "../../assets/prev.png";
import flieIcon from "../../assets/file.png";
import directoryIcon from "../../assets/directory.png";
import { request, apiList } from "../api/api";
import { catStates } from "../userSrore/userSrore";

function Node() {
  const context = useContext(catStates);
  const { catState, setCatState } = context;

  const loadingFuntion = (loadingState) => {
    setCatState({
      ...catState,
      isLoading: loadingState,
    });
  };

  const handleOnClick = (e) => {
    const nodeId = e.target.dataset.id;
    const selectedNode = catState.nodes.find((node) => node.id === nodeId);
    typeCheck(selectedNode);
  };

  const typeCheck = async (node) => {
    try {
      if (node.type === "DIRECTORY") {
        const list = await apiList(node.id);
        setCatState({
          ...catState,
          depth: [...catState.depth, node],
          nodes: list,
          isRoots: true,
        });
      } else if (node.type === "FILE") {
        const list = await request(
          `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public/${node.filePath}`
        );
        setCatState({
          ...catState,
          imgstate: list,
        });
      }
    } catch {
      console.log("망했나");
    } finally {
    }
  };
  const nodeTemplate = catState.nodes.map((node, index) => {
    const iconPath = node.type === "DIRECTORY" ? directoryIcon : flieIcon;

    return (
      <div
        key={index}
        className="Node"
        data-id={node.id}
        onClick={handleOnClick}
        css={css`
          width: 140px;
          min-height: 150px;
          padding: 12px;
          margin: 8px;
          text-align: center;
          display: flex;
          flex-direction: column;
          word-break: keep-all;
        `}
      >
        <img data-id={node.id} src={iconPath} />
        <div data-id={node.id}> {node.name}</div>
      </div>
    );
  });

  const handlebackArrow = async (e) => {
    const state = { ...catState };
    state.depth.pop();
    const nodeId =
      state.depth.length > 0 ? state.depth[state.depth.length - 1].id : "";

    if (nodeId) {
      const catList = await apiList(nodeId);

      setCatState({
        ...catState,
        nodes: catList,
      });
    } else {
      const catList = await apiList();

      setCatState({
        ...catState,
        nodes: catList,
        isRoots: false,
      });
    }
  };

  return (
    <ul
      className="Nodes"
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
      `}
    >
      {catState.isRoots ? (
        <div className="node" id="backArrow" onClick={handlebackArrow}>
          <img src={backArrow} />
        </div>
      ) : (
        ""
      )}
      {nodeTemplate}
      {/* {catState.isRoots ? (
        <div className="node" id="backArrow">
          <img src={backArrow}></img>
          {nodeTemplate}
        </div>
      ) : (
        { nodeTemplate }
      )} */}
    </ul>
  );
}

export default Node;
