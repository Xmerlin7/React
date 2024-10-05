import logo from './logo.svg';
import './App.css';
import MyReact from './main';
import { elmstlye } from './main';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyReact />
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
         boxShadow: elmstlye.boxShadow,
         
          }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seif Merlin
        </a>
      </header>
    </div>
  );
}

export default App;
