import './App.css';
import {useState} from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme(){
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div className="App" data-theme={theme}>
      <button onClick={toggleTheme} className='toggleBTN'>
          Toggle theme
      </button>
      <p>This is a test</p>
    </div>
  );
}

export default App;
