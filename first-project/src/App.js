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
      <div style={ {display: "flex", justifyContent:'center', alignItems: 'center' ,marginTop: "120px" }}>
        {/* container that has two divs */}
        <div style={{ display: "flex",gap: "50px", alignItems: "flex-start" }}>
          {/* posts div */}
          <div className="posts" style={{width: "60%"}}>
            <Post />
            <Post />
          </div>
          {/* menu sidebar div */}
          <div style={{width: "40%"}}>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
