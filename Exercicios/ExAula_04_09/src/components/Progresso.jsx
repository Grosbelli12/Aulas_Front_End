import { useState } from "react";

function Progresso() {
  const [progresso, setProgresso] = useState(0);

  const estiloDaBarra = {
    width: `${progresso}%`,
    height: "30px",
    backgroundColor: "blue",
    borderRadius: "5px",
  };

  function aumentarProgresso() {
    setProgresso(progresso == 100 ? progresso : progresso + 10);
  }

  function diminuirProgresso() {
    setProgresso(progresso == 0 ? progresso : progresso - 10);
  }

  return (
    <div>
        <p>Clique em +10% para encher a barra e -10% para esvaziar-la</p>
      <button onClick={aumentarProgresso}> +10%</button>
      <button onClick={diminuirProgresso}> -10%</button>

    <p>A barra está: {progresso}% cheia </p>
      <div
        style={{
          backgroundColor: "#e0e0de",
          borderRadius: "5px",
          width: "100%",
        }}
      >
        <div style={estiloDaBarra}></div>
      </div>
    </div>
  );
}
export default Progresso;
