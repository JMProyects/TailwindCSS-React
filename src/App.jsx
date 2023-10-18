//import Bubble from "./components/icons/Bubble.jsx";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

export default function App() {
  const [dark, setDark] = useState(false)
  const handleClick = () => {
    document.documentElement.classList.toggle('dark')
    setDark(!dark)
  }

  const text = dark
  ? 'Activar modo claro'
  : 'Activar modo oscuro'

  return (
    <>
      <Button onClick={handleClick}color="bg-blue-500">{text}</Button>

    </>
  );
}
