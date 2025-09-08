import "./App.css";
import LikeDeslike from "./components/Likes";
import ControleNota from "./components/ControleNota";
import Votacao from "./components/Votacao";
import Conversor from "./components/ConversorTemperatura";
import Progresso from "./components/Progresso";
import Carrinho from "./components/Carrinho";
import { use, useState } from "react";

function App() {
  const [escolha, setEscolha] = useState("");
  const [mostraComponente, setMostraComponente] = useState(null);

  function pegarEscolha(event) {
    setEscolha(event.target.value);
  }

  function escolhas() {
    const opcaoEscolhida =
      escolha === "1" ? (
        <LikeDeslike />
      ) : escolha === "2" ? (
        <ControleNota />
      ) : escolha === "3" ? (
        <Votacao />
      ) : escolha === "4" ? (
        <Carrinho />
      ) : escolha === "5" ? (
        <Conversor />
      ) : (
        <Progresso />
      );

    setMostraComponente(opcaoEscolhida);
  }
  return (
    <>
      <p>
        Escolha qual atividade deseja ver Digite 1 - Like/Deslike 2 - Controle
        de Nota 3 - Votação de Opções 4 - Controle de Quantidade no Carrinho 5 -
        Conversor de Temperatura 6 para Barra de Progresso
      </p>

      <input type="text" onChange={pegarEscolha} />
      <button onClick={escolhas}>Confirmar Escolha</button>

      <hr />

      <p>Você está na atividade: {escolha}</p>
      {mostraComponente}
    </>
  );
}

export default App;
