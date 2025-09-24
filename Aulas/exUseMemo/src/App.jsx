import React, { useState, useMemo } from 'react';

// 1. A NOSSA FUNÇÃO "LENTA" E "CARA"
// Ela simula um cálculo pesado. Vamos colocar um console.log para ver quando ela é chamada.
const expensiveCalculation = (num) => {
  console.log('--- CALCULANDO LENTAMENTE... ---'); // Para vermos no console quando ela roda
  for (let i = 0; i < 1000000000; i++) {
    // Apenas um loop para travar de propósito e simular um cálculo pesado
  }
  return num * 2;
};

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // 2. A MAGIA DO useMemo
  // A função expensiveCalculation só será executada novamente se o valor de 'number' mudar.
  const calculation = useMemo(() => {
    return  (number);
  }, [number]); // <--- Este é o array de dependências. A regra é clara: só re-calcule se 'number' mudar.

  // Estilos que mudam com base no tema (para provar que o componente está renderizando de novo)
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: '20px',
    textAlign: 'center',  
    transition: 'all 0.3s'
  };
  
  // SEM useMemo, faríamos assim, e travaria a cada troca de tema:
  // const calculation = expensiveCalculation(number);

  return (
    <div style={themeStyles}>
      <h1>Exemplo de `useMemo`</h1>
      
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      
      <h2>Resultado do cálculo pesado: {calculation}</h2>
      
      <hr style={{ margin: '20px 0' }} />
      
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Trocar Tema
      </button>
    </div>
  );
}

export default App;