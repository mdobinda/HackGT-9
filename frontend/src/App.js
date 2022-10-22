import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Maps/>

    </div>
  );
}

export default App;
