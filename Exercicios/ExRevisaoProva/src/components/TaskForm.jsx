const TaskForm = ({ state, dispatch }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={state.tarefa} // Usa state.tarefa que veio via props
        onChange={(e) =>
          dispatch({ type: "ATUALIZAR_TAREFA", payload: e.target.value }) // Usa dispatch que veio via props
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
  );
};

export default TaskForm;