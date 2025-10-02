import { useReducer, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm.JSX";
import TaskList from "./components/TaskList";

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
          ...state.listaTarefas.filter(
            (tarefa) => tarefa.id !== action.payload
          ),
        ],
      };
    case "CARREGAR_TAREFAS":
      return {
        ...state,
        listaTarefas: action.payload,
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

  // Carrega os dados do localStorage quando o componente é montado
  useEffect(() => {
    dispatch({
      type: "CARREGAR_TAREFAS",

      payload: JSON.parse(localStorage.getItem("LISTA_TAREFA")),
    });
  }, []);

  useEffect(() => {
    // Salva os dados no localStorage sempre que a lista de tarefas muda
    localStorage.setItem("LISTA_TAREFA", JSON.stringify(state.listaTarefas));
  }, [state.listaTarefas]);

  return (
    <>
      <div className="todo-container">
        <h2>Lista de Tarefas ✅</h2>
        <TaskForm state={state} dispatch={dispatch} />
        <TaskList state={state} dispatch={dispatch} totalGeral={totalGeral} />
      </div>
    </>
  );
}

export default App;
