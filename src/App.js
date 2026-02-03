import './App.css';
import {useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Experience } from './components/Experience';

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme(){
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

    useEffect(() => {
      document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const exp_lst = [
    {pic: "/ibm.png", name: "IBM", title: "Software Engineer Intern", date: "May 2026 - Aug. 2026"},
    {pic: "/scale.webp", name: "Scale AI", title: "GenAI - Technical Advisor", date: "Oct. 2025 - May. 2026"},
    {pic: "/mantech.jpg", name: "ManTech", title: "Software Engineer Intern", date: "Dec. 2024 - Mar. 2025"},
    {pic: "/vt.png", name: "Virginia Tech", title: "CS Major", date: "Aug. 2023 - Dec. 2026"},
  ]

    useEffect(() => {
    let lastMouseX = 0;
    let lastMouseY = 0;

    const updateGradient = () => {
      document.body.style.setProperty("--x", `${lastMouseX + window.scrollX}px`);
      document.body.style.setProperty("--y", `${lastMouseY + window.scrollY}px`);
    };

    const handleMouseMove = (e) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      updateGradient();
    };

    const handleScroll = () => {
      updateGradient();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="App" data-theme={theme}>
      <Navbar modeSwitch={toggleTheme}/>
      <Card/>
      <div className="exp">
        <h1>Experience</h1>
        {
          exp_lst.map((curr_exp) => (
            <Experience exps={curr_exp}/>
          ))
        }
      </div>
      <hr></hr>
      <div className='bottom'>
        <p>contact me at landonduba[at]vt[dot]edu</p>
        <p>made 2-26</p>
      </div>
    </div>
  );
}

export default App;
