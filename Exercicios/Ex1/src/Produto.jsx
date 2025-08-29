function Produtoprops({ nomeProduto, precoproduto, nomeClasse, idNome }) {
  return (
    <p className={nomeClasse} id={idNome}>
      {nomeProduto} {precoproduto}
    </p>
  );
}
export default Produtoprops;
