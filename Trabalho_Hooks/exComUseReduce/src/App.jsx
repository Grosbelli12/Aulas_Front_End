import { useReducer } from "react";
import "./App.css";


function contadorReducer(state, action) {
  console.log("Reducer foi chamado com a ação:", action.type);
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'DECREMENTAR':
      return state - 1;
    case 'RESETAR':
      return 0; 
    default:
      return state;
  }
}

function App() {
  const [contador, dispatch] = useReducer(contadorReducer, 0);

  return (
    <div>
      <h2>Contador com useReducer</h2>
      <h1>{contador}</h1>

      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>
        Incrementar +
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>
        Decrementar -
      </button>
      <button onClick={() => dispatch({ type: 'RESETAR' })}>
        Resetar
      </button>
    </div>
  );
}

export default App;