function Header(props) {
  return (
    <header className="header">
      <nav className="navegacao">
        <h1 id="titulo">Meu Portifolio</h1>
        <ul id="lista-navegacao">
          <li>
            <a href="#home">{props.um}</a>
          </li>
          <li>
            <a href="#sobre">{props.dois}</a>
          </li>
          <li>
            <a href="#contato">{props.tres}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
