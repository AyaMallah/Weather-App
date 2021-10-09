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
      <p><a href="https://github.com/AyaMallah/Weather-App">Open-source code</a>, by Aya.</p>
    </div>
  );
}

export default App;
