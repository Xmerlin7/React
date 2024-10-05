import './App.css';
import { Header } from './header';
import Post from './posts';
import TagButton from './tagButton'
function App() {
  return (
    <div className="App">
      <Header />
      {/* Big container */}
      <div style={{marginTop: "120px"}}>
        {/* container that has two divs */}
        <div style={{display: "flex", justifyContent: "center"}}>
          {/* posts div */}
          <div>
            <Post />
            <Post />
          </div>
          {/* menu sidebar div */}
          <div>
          
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
