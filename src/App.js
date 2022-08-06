import MenuRouter from "./pages/menu/menuRouter";

function App() {
  return (
      <div className="App">
        <div id="frontLayer">
            <div id="main">
              <MenuRouter />
            </div>
        </div>
        <div id="backLayer"></div>
      </div>
  );
}

export default App;
