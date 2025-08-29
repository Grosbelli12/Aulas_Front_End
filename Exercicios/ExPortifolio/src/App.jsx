import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import imagem from '../src/assets/Portifolio.png'

function App() {
  return (
    <>
      <Header 
      um="Home"
      dois="Sobre"
      tres="Contato"  
      />
        <Card
          imagem={imagem}
          cumprimento="Hello, i'm"
          tituloCard= "Gustavo Grosbelli"
          descricao="Descrição  Bem-vindo ao meu portifólio! Aqui você encontrará uma seleção dos meus melhores
           trabalhos e projetos.
        Sinta-se à vontade para explorar e conhecer mais sobre minhas habilidades
      e experiências profissionais."
        />      
        <Footer 
          Children="Meu Primeiro Portifolio."
        />
    </>
  );
}

export default App;
