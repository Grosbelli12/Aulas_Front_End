import { useState } from "react";

function LikeDeslike() {
  const [like, setLike] = useState(0);
  const [deslike, setDeslike] = useState(0);

  function Like() {
    setLike(like + 1);
  }

  function Deslike() {
    setDeslike(deslike + 1);
  }

  return (
    <div className="Botoes">
      <button id="BotaoDoLike" onClick={Like}>
        {" "}
        Like{" "}
      </button>
      <p>Seu número de Curtidas é: {like}</p>
      <button id="Deslike" onClick={Deslike}>
        Deslike
      </button>
      <p>Seu número de deslikes é: {deslike}</p>
    </div>
  );
}

export default LikeDeslike;
