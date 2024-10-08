import "./App.css";
import { Header } from "./header";
import Post from "./posts";
import SideBar from "./sideBar";

function App() {
  const posts = [
    {
      key: 1,
      name: "seif",
    },
    {
      key: 2,
      name: "Adam",
    },
    {
      key: 3,
      name: "Merlin",
    },
  ];
  const postLists = posts.map((post) => {
    return <Post key={post.key} name={post.name} />;
  });

  return (
    <div className="App">
      <Header />
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
            {postLists}
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
