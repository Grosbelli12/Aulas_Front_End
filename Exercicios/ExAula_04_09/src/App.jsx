import "./App.css";
import LikeDeslike from "./components/Likes";
import ControleNota from "./components/ControleNota";
import Votacao from "./components/Votacao";
import Conversor from "./components/ConversorTemperatura";
import Progresso from "./components/Progresso";

function App() {
  return (
    <>
      <LikeDeslike />
      <ControleNota />
      <Votacao />
      <Conversor/>
      <Progresso/>
    </>
  );
}

export default App;
