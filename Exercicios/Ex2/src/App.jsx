import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuadradoGrandeProps from "./QudradoGrande.jsx";
import Linhas from "./Linhas.jsx";
import QuadradinhosProps from "./Quadradinhos.jsx";

function App() {
  return (
    <>
      <QuadradoGrandeProps ClasseQuadradoGrande="quadrado-grande">
          <Linhas>
            <QuadradinhosProps></QuadradinhosProps>
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps>
           </Linhas>

           <Linhas>
            <QuadradinhosProps></QuadradinhosProps>
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps>
           </Linhas>

           <Linhas>
            <QuadradinhosProps></QuadradinhosProps>
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps>
           </Linhas>

           <Linhas>
            <QuadradinhosProps></QuadradinhosProps>
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps>
           </Linhas>

           <Linhas>
            <QuadradinhosProps></QuadradinhosProps>
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps>
           </Linhas>

           <Linhas>
            <QuadradinhosProps></QuadradinhosProps>
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps>
           </Linhas>

           <Linhas>
            <QuadradinhosProps></QuadradinhosProps>
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps>
           </Linhas>

           <Linhas>
            <QuadradinhosProps></QuadradinhosProps>
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps> 
            <QuadradinhosProps></QuadradinhosProps>
           </Linhas>

        </QuadradoGrandeProps>    
    </>
  );
} 

export default App;
