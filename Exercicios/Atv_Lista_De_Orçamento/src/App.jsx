import { use, useState } from "react";
import "./App.css";
//USAR BORDER COLLAPS

function App() {
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState();
  const [valorUnitario, setValorUnitario] = useState();


  const [listaItem, setlistaItem] = useState([]);

  const adicionarItem = () => {
    if (descricao.trim() === "") {
      alert("Informe uma Descrição");
      return;
    }
    const novoItem = {
      id: Date.now(),
      Descricao: descricao,
      Quantidade: quantidade,
      ValorUnitario: valorUnitario,
      total: quantidade * valorUnitario
    };
    setlistaItem([...listaItem, novoItem]);
    
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
        />
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <input
          type="number"
          value={valorUnitario}
          onChange={(e) => setValorUnitario(e.target.value)}
        />
      </div>
      <button className="adicionar" onClick={adicionarItem}>
        +
      </button>

      {/*   <ul>
          <li>Descrição</li>
          <li>QTD</li>
          <li>Unitário</li>
          <li>Total</li>
          <li>Ações</li>
      </ul> */}
      <ul>
        {listaItem.map((item) => (
          <li key={item.id} >
            {item.Descricao} {item.Quantidade} --
            {item.ValorUnitario}
            {item.total}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
