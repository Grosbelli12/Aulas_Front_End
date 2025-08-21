import "./App.css";
import Produtoprops from "./Produto";
import PessoaProps from "./CartaoPessoa";

function App() {
  return (
    <>
      <div className="App">
        <Produtoprops
          nomeClasse="Produto"
          idNome="1"
          nomeProduto="Arroz"
          precoproduto="R$ 10,00"
        />

        <PessoaProps
          classeNome="PessoaNome"
          idNome="1"
          nomePessoa="Cleiton"
          classeIdade="PessoaIdade"
          idIdade="2"
          idadePessoa="Idade: 30 anos"
          nomeProfissao="PessoaProfissao"
          idProfissao="3"
          profissaoPessoa="Profissão: Programador"
        />
      </div>
    </>
  );
}

export default App;
