function PessoaProps({
  classeNome,
  idNome,
  nomePessoa,
  classeIdade,
  idIdade,
  idadePessoa,
  nomeProfissao,
  idProfissao,
  profissaoPessoa,
}) {
  return (
    <div>
      <h2 className={classeNome} id={idNome}>
        {nomePessoa}
      </h2>

      <p className={classeIdade} id={idIdade}>
        {idadePessoa}
      </p>

      <p className={nomeProfissao} id={idProfissao}>
        {profissaoPessoa}
      </p>
    </div>
  );
}   
export default PessoaProps;
