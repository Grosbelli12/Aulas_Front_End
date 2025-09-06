import { useState } from "react";

function Progresso (){

    const [progresso, setProgresso] = useState(0);

    function aumentarProgresso(){
        setProgresso((prevCount) => prevCount + 10);
    }

    function diminuirProgresso(){
       setProgresso((prevCount) => prevCount - 10);
    }



     return(
        <div>
            <button onClick={aumentarProgresso}> +10%</button>
            <button onClick={diminuirProgresso}> -10%</button>
            <div id="barraDePorcentagem">{progresso}</div>
        </div>
    );
}
export default Progresso;