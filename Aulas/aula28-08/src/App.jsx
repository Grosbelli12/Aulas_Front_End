import "./App.css";
import Header from "./components/header";
import Corpo from "./components/corpo";
import Rodape from "./components/rodape";


function App() {
  return (
    <>
      <div className="card">
        <Header titulo="oi card 1" />
        <Corpo descricaos="bahsh"/>
        <Rodape descricao="sds"/>
      </div>
      <div className="card">
        <Header titulo="oi card 2" />
        <Corpo descricaos="bahh"/>
        <Rodape descricao="sds"/>
      </div>
    </>
  );
}

export default App;
