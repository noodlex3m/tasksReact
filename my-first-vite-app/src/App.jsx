import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Привіт, світе! Я працюю у Vite!</h1>
      <p>Це мій перший компонент у справжньому проєкті.</p>
    </div>
  );
}

export default App;
