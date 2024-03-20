import logo from './logo.svg';
import btc from './btc.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={btc} className="App-logo" alt="logo" />
        <p>
          What's up Fam this is where we will keep up with the ship 1 per day mindset
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
