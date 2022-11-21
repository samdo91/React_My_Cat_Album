import React, { useEffect, useContext } from "react";
import Breadcrumb from "./breadcrumb/breadcrumb";
import Node from "./nodo/nods";
import { apiList } from "./api/api";
import ImgPage from "./imgPage/imgPage";
import LoadingPage from "./Loading/loadingPage";
import { catStates } from "./userSrore/userSrore";

function MainPage() {
  const context = useContext(catStates);
  const { catState, setCatState } = context;

  const loadingFuntion = (loadingState) => {
    setCatState({
      ...catState,
      isLoading: loadingState,
    });

    console.log(catState);
  };

  useEffect(() => {
    try {
      loadingFuntion(true);
      const catList = async () => {
        const catList = await apiList();

        setCatState({
          ...catState,
          nodes: catList,
        });
      };

      catList();
    } catch (e) {
      console.log(e);
    } finally {
      loadingFuntion(false);
    }
  }, []);

  return (
    <div>
      <title> 고양이 보고 가세요!</title>
      <h1> 고양이 보고 가라고</h1>
      <LoadingPage catState={catState} />
      <Breadcrumb catState={catState} setCatState={setCatState} />
      <Node
        catState={catState}
        setCatState={setCatState}
        loadingFuntion={loadingFuntion}
      />
      <ImgPage catState={catState} />
    </div>
  );
}

export default MainPage;
