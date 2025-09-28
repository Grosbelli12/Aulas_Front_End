import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [fatorialCom, setFatorialCom] = useState(0);
  const [temacom, setTemaCom] = useState("light");

  const [fatorialSem, setFatorialSem] = useState(0);
  const [temaSem, setTemaSem] = useState("light");

  const resultadoFatorialComUseMemo = useMemo(() => {
    console.log("Calculando COM useMemo...");
    if (fatorialCom < 0) {
      return "não existe fatorial negativo";
    }

    let resultado = 1;
    for (let i = fatorialCom; i >= 1; i--) {
      resultado *= i;
    }
    return resultado;
  }, [fatorialCom]);

  const resultadoFatorialSemUseMemo = () => {
    console.log("Executando cálculo SEM useMemo...");
    if (fatorialSem < 0) {
      return "não existe fatorial negativo";
    }

    let resultadoCom = 1;
    for (let i = fatorialSem; i >= 1; i--) {
      resultadoCom *= i;
    }

    return resultadoCom;
  };

  const mudarTemaComUseMemo = () => {
    setTemaCom(temacom === "light" ? "dark" : "light");
  };

  const mudarTemaSemUseMemo = () => {
    setTemaSem(temaSem === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className={temacom}>
        <h1>Usando useMemo</h1>
        <h2>Selecione qual fatorial você deseja calcular 🔽</h2>
        <input
          type="number"
          value={fatorialCom}
          onChange={(e) => setFatorialCom(Number(e.target.value))}
        />

        <p>result {resultadoFatorialComUseMemo}</p>

        <button onClick={mudarTemaComUseMemo}>
          Mudar para tema {temacom === "light" ? "Escuro 🌒" : "Claro ☀️"}
        </button>
      </div>

      {
        <div className={temaSem}>
          <h1>Sem useMemo</h1>
          <h2>Selecione qual fatorial você deseja calcular 🔽</h2>
          <input
            type="number"
            value={fatorialSem}
            onChange={(e) => setFatorialSem(Number(e.target.value))}
          />

          <p>result {resultadoFatorialSemUseMemo()}</p>

          <button onClick={mudarTemaSemUseMemo}>
            Mudar para tema {temaSem === "light" ? "Escuro 🌒" : "Claro ☀️"}
          </button>
        </div>
      }
    </>
  );
}

export default App;
