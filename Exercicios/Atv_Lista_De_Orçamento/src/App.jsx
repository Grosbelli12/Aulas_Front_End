import { use, useState } from "react";
import "./App.css";
//USAR BORDER COLLAPS

function App() {
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [listaItem, setListaItem] = useState([]);
  const [totalgeral, setTotalGeral] = useState()

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
      total: quantidade * valorUnitario,
    };
    setListaItem([...listaItem, novoItem]);
  };

   const totalGeral = listaItem.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual.valorUnitario
  },  0);

  const excluirItem = (id) => {
    setListaItem(listaItem.filter((item) => item.id != id));
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

      <table>
        <thead>
          <tr>
            <th className="descricao">Descrição</th>
            <th className="quantidade">QTD</th>
            <th className="valor unitario">Unitário</th>
            <th className="total">Total</th>
            <th className="acoes">Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaItem.map((item) => (
            <tr key={item.id}>
              <th className="descricao">{item.Descricao}</th>
              <th className="quantidade"> {item.Quantidade}</th>
              <th className="valor unitario"> {item.ValorUnitario}</th>z
              <th className="total"> {item.total}</th>
              <button onClick={() => excluirItem(item.id)} className="excluir">
                x
              </button>
            </tr>
            
          ))}
        </tbody>
        <tfoot>
          <tr>
          <th scope="row" colspan="2">
            Total Geral
          </th>
        </tr>

        <tr>
          <td>
            { {totalGeral} }
          </td>
        </tr>
        </tfoot>
      </table>
    </>
  );
}

export default App;
