import { useReducer, useState } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ATUALIZAR_TAREFA":
      return { ...state, tarefa: action.payload };
    case "ATUALIZAR_HORAS":
      return { ...state, horas: action.payload };
    case "ATUALIZAR_VALOR_HORA":
      return { ...state, valorHora: action.payload };
    case "ADICIONAR":
      if (!state.tarefa.trim() || state.horas <= 0 || state.valorHora <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return state;
      }
      const novaTarefa = {
        id: Date.now(),
        NomeTarefa: state.tarefa,
        horas: state.horas,
        valorHora: state.valorHora,
        custo: state.horas * state.valorHora,
      };
      return {
        ...state,
        listaTarefas: [...state.listaTarefas, novaTarefa],
        tarefa: "",
        horas: 0,
        valorHora: 0,
      };
    case "EXCLUIR_TAREFA":
      return {
        ...state,
        listaTarefas: [
          ...state.listaTarefas.filter((tarefa) => tarefa.id !==   action.payload),
        ],
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    tarefa: "",
    horas: 0,
    valorHora: 0,
    listaTarefas: [],
  });

  const totalGeral = state.listaTarefas.reduce((acumulador, tarefaAtual) => {
    return acumulador + tarefaAtual.custo;
  }, 0);

  return (
    <>
      <div className="todo-container">
        <h2>Lista de Tarefas ✅</h2>

        <div className="input-container">
          <input
            type="text"
            value={state.tarefa}
            onChange={(e) =>
              dispatch({ type: "ATUALIZAR_TAREFA", payload: e.target.value })
            }
            placeholder="Digite uma tarefa"
          />

          <input
            type="number"
            value={state.horas}
            onChange={(e) =>
              dispatch({
                type: "ATUALIZAR_HORAS",
                payload: Number.parseFloat(e.target.value),
              })
            }
            placeholder="Tempo (horas)"
          />

          <input
            type="number"
            value={state.valorHora}
            onChange={(e) =>
              dispatch({
                type: "ATUALIZAR_VALOR_HORA",
                payload: Number.parseFloat(e.target.value),
              })
            }
            placeholder="Valor p/ Hora"
          />
          <button
            className="adicionar"
            onClick={() => dispatch({ type: "ADICIONAR" })}
          >
            +
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th className="descricao">Nome da Tarefa</th>
              <th className="horas">Horas</th>
              <th className="valor-hora">Valor p/ Hora</th>
              <th className="total">Custo</th>
              <th className="acoes">Ações</th>
            </tr>
          </thead>
          <tbody>
            {state.listaTarefas.map((tarefa) => (
              <tr key={tarefa.id}>
                <td className="NomeTarefa">{tarefa.NomeTarefa}</td>
                <td className="horas">{tarefa.horas}</td>
                <td className="valorHora">R$ {tarefa.valorHora.toFixed(2)}</td>
                <td className="custo">R$ {tarefa.custo.toFixed(2)}</td>
                <td className="acoes">
                  <button
                    onClick={() =>
                      dispatch({ type: "EXCLUIR_TAREFA", payload: tarefa.id })
                    }
                    className="excluir"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan="5">
                Total Geral: R$ {totalGeral.toFixed(2)}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default App;
