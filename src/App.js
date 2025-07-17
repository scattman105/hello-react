import logo from './logo.svg';
import './App.css';
import InjectText from './InjectText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Let's get LINKED!</title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>this is hard-coded HTML</p>
          <br/>
          <p classname="React-text"></p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/charlie-zhang-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me
        </a>
      </header>
      <InjectText className="injected-target" text="Hello from InjectText" />
    </div>
  );
}

export default App;
