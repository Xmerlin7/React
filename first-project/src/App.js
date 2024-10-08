import "./App.css";
import { Header } from "./header";
import MyForm from "./myForm";
import Post from "./posts";
import SideBar from "./sideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <MyForm />
      {/* Big container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "120px",
        }}
      >
        {/* container that has two divs */}
        <div style={{ display: "flex", gap: "50px", alignItems: "flex-start" }}>
          {/* posts div */}
          <div style={{ flexShrink: "0", minWidth: "60%" }}>
            <Post />
            {/* <h3 style={{ color: namee === "Adam" ? "green" : "red" }}>Hi Hi captain</h3> */}
          </div>
          {/* menu sidebar div */}
          <div style={{ width: "40%" }}>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
