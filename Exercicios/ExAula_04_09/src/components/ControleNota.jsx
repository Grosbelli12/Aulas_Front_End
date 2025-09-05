import { use, useState } from "react";

function ControleNota() {
  const [name, setName] = useState("Seu nome Aqui");
  const [nota, setNota] = useState(0);
  const status = nota >= 7 ? "Aprovado " : "Reprovado ";

  function pegarNome(event) {
    setName(event.target.value);
  }

  function pegarNota(event) {
    setNota(event.target.value);
  }

  return (
    <div>
      <p>Digete o Nome do seu aluno:</p>
      <input type="text" onChange={pegarNome} />

      <p>Digite a nota do seu aluno:</p>
      <input type="text" onChange={pegarNota} />

      <p>
        o Aluno: {name} tirou {nota} e foi {status}
      </p>
    </div>
  );
}
export default ControleNota;
