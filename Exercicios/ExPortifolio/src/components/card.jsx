function Card(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt="Imagem do projeto" className="card-img" />
      <h2 id="card-title">{props.tituloCard}</h2>
      <p id="card-description">{props.descricao}</p>
    </div>
  );
}
export default Card;
