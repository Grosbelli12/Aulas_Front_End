import { use, useState } from "react";

function Carrinho() {
  const [quantidade, setQuantidade] = useState(1);
  const [valor, setValor] = useState(50);

  function addQuantidade() {
    setQuantidade(quantidade + 1);
    setValor(valor + 50);
  }

  function diminuirQuantidade() {
    setQuantidade(quantidade <= 1 ? quantidade : quantidade - 1);
    setValor(quantidade <= 1 ? valor : valor - 50);
  }

  return (
    <div>
      <button onClick={addQuantidade}> + Quantidade</button>

      <button onClick={diminuirQuantidade}> - Quantidade</button>

      <p>Você tem essa quantidade: {quantidade} de notas de 50</p>
      <p>O seu valor total é R$ {valor}</p>
    </div>
  );
}

export default Carrinho;
