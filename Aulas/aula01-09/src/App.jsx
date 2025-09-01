import { use, useState } from "react";
import "./App.css";

function App() {
  var nome = "Cleiton";

  const [name, setName] = useState("Valor Inicial");
  const [lastname, setLastName] = useState();

  function mudarNome(event) {
    nome = event.target.value;
    setName(event.target.value);
  }

  function mudaSobrenome(event){
    setLastName(event.target.value)
  }

  return (
    <>
      <p>Informe seu nome</p>
      <input onChange={mudarNome} />
      <p>{nome}</p>
      <p> Agora via useState : {name} </p>

      <p>Informe seu sobrenome</p>
      <input onChange={mudaSobrenome}/>
      <p>Seu nome é : {lastname}</p>
    </>
  );
}

export default App;
