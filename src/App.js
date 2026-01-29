import './App.css';
import {useState} from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme(){
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div className="App" data-theme={theme}>
      <Navbar modeSwitch={toggleTheme}/>
      <Card/>
    </div>
  );
}

export default App;
