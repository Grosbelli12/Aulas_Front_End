import { use, useState } from "react";

function ControleNota() {
  const [name, setName] = useState("");
  const [nota, setNota] = useState(0);
  const [result, setResult] = useState();

  function pegarNome(event) {
    setName(event.target.value);
  }

  function pegarNota(event) {
    setNota(event.target.value);
  }

  function exibirResultado() {
    let status = nota >= 7 ? "Aprovado" : "Reprovado";

    setResult(`O Aluno: ${name} tirou ${nota} e foi ${status}`);
  }

  return (
    <div>
      <p>Digete o Nome do seu aluno:</p>
      <input type="text" onChange={pegarNome} />

      <p>Digite a nota do seu aluno:</p>
      <input type="text" onChange={pegarNota} />

      <button onClick={exibirResultado}>Ver nota do Aluno</button>
      <p>{result}</p>
    </div>
  );
}
export default ControleNota;
