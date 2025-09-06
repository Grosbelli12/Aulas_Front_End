import "./App.css";
import LikeDeslike from "./components/Likes";
import ControleNota from "./components/ControleNota";
import Votacao from "./components/Votacao";
import Conversor from "./components/ConversorTemperatura";
import Progresso from "./components/Progresso";
import Carrinho from "./components/Carrinho";
import { use, useState } from "react";

function App() {
  const [escolha, setEscolha] = useState();

  function pegarEscolha(event) {
    setEscolha(event.targert.value);
  }

  function escolhas() {

    const opcaoEscolhida = escolha == "1" ? <LikeDeslike /> : 
    escolha == "2" ? <ControleNota /> :
    escolha == "3" ? <Votacao /> :
    escolha == "4" ? <Carrinho/>:
    escolha == "5" ? <Conversor />: 
     <Progresso />

    setEscolha(`${opcaoEscolhida}`)
   
;
  }
  return (
    <>
      <p>
        Escolha qual atividade deseja ver Digite 1 para Like/Deslike 2 para
        Controle de Nota 3 para Votação de Opções 4 para Controle de Quantidade
        no Carrinho 5 para Conversor de Temperatura 6 para Barra de Progresso
      </p>
      <input type="text" onChange={pegarEscolha} />
    <button onClick={escolhas}>Confirmar Escolha</button>
        <p>{escolha}</p>

    </>
  );
}

export default App;
