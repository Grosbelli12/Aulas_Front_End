import { useState } from "react";

function Conversor() {
  const [temperatura, setTemperatura] = useState("");
  const [conversao, setConversao] = useState();
  const tempConvertida = (temperatura * 9) / 5 + 32;

  function pegarTemperatura(event) {
    setTemperatura(event.target.value);
  }

  function mostrarConversao() {
    setConversao(`A sua Temperatura em Fahrenheit é ${tempConvertida}`);
  }

  return (
    <div>
      <p>Digite a sua temperarura em Celsius</p>
      <input type="text" onChange={pegarTemperatura} />
      <button onClick={mostrarConversao}> Converter para Fahrenheit</button>
      <p>{conversao}</p>
    </div>
  );
}

export default Conversor;
