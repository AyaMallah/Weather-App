import './App.css';
import Weather from './Weather';

function App() {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <Weather defaultCity="London" />
        </div>
      </div>
      <footer><a className="github" href="https://github.com/AyaMallah/Weather-App" target="_blank" rel="noopener noreferrer">Open-source code</a>, by Aya.</footer>
    </>
  );
}

export default App;
