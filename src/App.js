import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="main-container">
        <Weather defaultCity="London" />
      </div>
      <footer><a href="https://github.com/AyaMallah/Weather-App">Open-source code</a>, by Aya.</footer>
    </div>
  );
}

export default App;
