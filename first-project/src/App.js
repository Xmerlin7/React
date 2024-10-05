import './App.css';
import { Header } from './header';
import Post from './posts';
import SideBar from './sideBar'
import './posts.css'
function App() {
  return (
    <div className="App">
      <Header />
      {/* Big container */}
      <div style={{ marginTop: "120px" }}>
        {/* container that has two divs */}
        <div style={{ display: "flex", justifyContent: "center",gap: "50px", alignItems: "flex-start" }}>
          {/* posts div */}
          <div className="posts">
            <Post />
            <Post />
          </div>
          {/* menu sidebar div */}
          <div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
