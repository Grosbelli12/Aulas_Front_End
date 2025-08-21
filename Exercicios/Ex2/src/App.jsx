import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import QuadradoGrandeProps from "./QudradoGrande.jsx";
import Linhas from "./Linhas.jsx";
import Quadradinhos from "./Quadradinhos.jsx";

function App() {
  return (
    <QuadradoGrandeProps>
      <Linhas tipo="impar"><Quadradinhos /><Quadradinhos /><Quadradinhos /><Quadradinhos /></Linhas>
      <Linhas tipo="par"><Quadradinhos /><Quadradinhos /><Quadradinhos /><Quadradinhos /></Linhas>
      <Linhas tipo="impar"><Quadradinhos /><Quadradinhos /><Quadradinhos /><Quadradinhos /></Linhas>
      <Linhas tipo="par"><Quadradinhos /><Quadradinhos /><Quadradinhos /><Quadradinhos /></Linhas>
      <Linhas tipo="impar"><Quadradinhos /><Quadradinhos /><Quadradinhos /><Quadradinhos /></Linhas>
      <Linhas tipo="par"><Quadradinhos /><Quadradinhos /><Quadradinhos /><Quadradinhos /></Linhas>
      <Linhas tipo="impar"><Quadradinhos /><Quadradinhos /><Quadradinhos /><Quadradinhos /></Linhas>
      <Linhas tipo="par"><Quadradinhos /><Quadradinhos /><Quadradinhos /><Quadradinhos /></Linhas>
    </QuadradoGrandeProps>
  );
} 

export default App;