import "./App.css";
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import MainPage from "./Comp/mainPage";
import UserSrore from "./Comp/userSrore/userSrore";

function App() {
  return (
    <UserSrore>
      <Global
        styles={css`
           {
            box-sizing: border-box;
          }
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #eee;
            flex-direction: column;
          }
        `}
      />

      <div
        className="App"
        css={css`
          border: 1px solid #ccc;
          background-color: #fff;
          border-radius: 5px;
          width: 800px;
          height: 600px;
        `}
      >
        <MainPage
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
          `}
        />
      </div>
    </UserSrore>
  );
}

export default App;
