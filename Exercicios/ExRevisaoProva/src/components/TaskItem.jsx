const TaskItem = ({ tarefa, dispatch }) => {
  return (
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
  );
};

export default TaskItem;