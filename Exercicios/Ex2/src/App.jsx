import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuadradoGrandeProps from "./QudradoGrande.jsx";
import QuadradinhosProps from "./Quadradinhos.jsx";

function App() {
  return (
    <>
      <QuadradoGrandeProps ClasseQuadradoGrande="quadrado-grande" />

      <Coluna>
        <QuadradinhosProps ClasseQuadradoPequeno="quadrado-pequeno0" />
        <QuadradinhosProps ClasseQuadradoPequeno="quadrado-pequeno1" />
        <QuadradinhosProps ClasseQuadradoPequeno="quadrado-pequeno2" />
        <QuadradinhosProps ClasseQuadradoPequeno="quadrado-pequeno3" />
      </Coluna>
    </>
  );
} 

export default App;
