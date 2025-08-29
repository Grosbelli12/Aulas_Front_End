function Card(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt="Imagem do projeto" className="card-img" />
       <div className="card-texto">
      <h2 id="card-cumprimento">{props.cumprimento}</h2>
      <h1 id="card-title">{props.tituloCard}</h1>
      <p id="card-description">{props.descricao}</p>
      </div>
    </div>

  );
  
}
export default Card;
