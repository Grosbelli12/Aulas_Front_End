import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Meu post</p>
        <section>
          <p>conteudo do meu post </p>
        </section>
        <footer>
          <p>meu footer</p>
        </footer>
      </div>
    </>
  );
}

export default App;
