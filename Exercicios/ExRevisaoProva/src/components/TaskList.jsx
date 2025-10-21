import TaskItem from "./TaskItem"; 

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
          <TaskItem key={tarefa.id} tarefa={tarefa} dispatch={dispatch} />
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