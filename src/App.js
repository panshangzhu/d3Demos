import Demo1 from "./components/Demo1";
import Demo2 from "./components/Demo2";
import Demo3 from "./components/Demo3";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        minWidth: "400px",
        flexWrap: "wrap",
      }}
    >
      <Demo1 />
      <Demo2 />
      <Demo3 />
    </div>
  );
}

export default App;
