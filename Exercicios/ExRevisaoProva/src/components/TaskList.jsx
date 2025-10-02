const TaskList = ({ state, dispatch, totalGeral }) => {
  return (
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
  );
};

export default TaskList;
