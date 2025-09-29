import { useState } from "react";

// exemplo demostrativo do código sem o useState 
// onde podemos ver que preciso criar 3 funções separadas, onde cada uma moifica o estado de um jeito diferente
// já como vimos com o useReducer, fazemos isso com apenas uma única função 

function ExComUseState() {

  const [contador, setContador] = useState(0);

  const Incrementar = () => {
    setContador((contadorAtual) => contadorAtual + 1);
  };

  const Decrementar = () => {
    setContador((contadorAtual) => contadorAtual - 1);
  };

  const Resetar = () => {
    setContador(0);
  };

  return (
    <div>
      <h2>Contador com useState</h2>
      <h1>{contador}</h1>
      <button onClick={Incrementar}>Incrementar +</button>
      <button onClick={Decrementar}>Decrementar -</button>
      <button onClick={Resetar}>Resetar</button>
    </div>
  );
}

export default App;
