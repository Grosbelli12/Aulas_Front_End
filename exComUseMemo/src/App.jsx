import { useState } from "react";
import "./App.css";

function App() {
  const [fatorial, setFatorial] = useState(0);


    let resultado = 1;
    for (let i = fatorial; i >= 1; i--) {
      resultado *= i;
    }
  

  return (
    <>
      <h2>Selicione qual fatorial você deseja calcular 🔽</h2>
      <input
        type="number"
        value={fatorial}
        onChange={(e) => setFatorial(Number(e.target.value))}
      
      />

      <p>result {resultado}</p>
    </>
  );
}

export default App;
