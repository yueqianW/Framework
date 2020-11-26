import logo from './logo.svg';
import './App.css';
import LikeButton from './components/likeButton'
import MouseTracker from './components/mouseTracker'
import DogShow from './components/dogShow'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
        <MouseTracker />
        <DogShow />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
