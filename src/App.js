import "./App.css";
import MainPage from "./Comp/mainPage";
import UserSrore from "./Comp/userSrore/userSrore";

function App() {
  return (
    <UserSrore>
      <div className="App">
        <MainPage />
      </div>
    </UserSrore>
  );
}

export default App;
