import './App.css';
import Search from './Search';
import Weather from './Weather';
import Forecast from './Forecast';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="main-container">
        <Search />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
