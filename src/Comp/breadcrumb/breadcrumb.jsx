import { apiList } from "../api/api";

function Breadcrumb(props) {
  const { catState, setCatState } = props;

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
    <nav className="Breadcrumb">
      <div className="nav-item" onClick={handleBackRoot}>
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
