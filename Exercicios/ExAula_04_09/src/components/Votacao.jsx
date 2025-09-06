import { use, useState } from "react";

function Votacao() {
  const [opcaoA, setOpcaoA] = useState(0);
  const [opcaoB, setOpcaoB] = useState(0);
  const [opcaoC, setOpcaoC] = useState(0);

  function votosA() {
    setOpcaoA((prevCount) => prevCount + 1);
  }

  function votosB() {
    setOpcaoB((prevCount) => prevCount + 1);
  }

  function votosC() {
    setOpcaoC((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>Vote na sua opção preferida</p>
      <button id="A" onClick={votosA}>
        opcaoA
      </button>
      <button id="B" onClick={votosB}>
        opcaoB
      </button>
      <button id="C" onClick={votosC}>
        opcaoC
      </button>

      <p>
        O placar é: {opcaoA} votos para opcaoA, {opcaoB} votos para opcaoB e{" "}
        {opcaoC} votos para opcaoC{" "}
      </p>
    </div>
  );
}

export default Votacao;
