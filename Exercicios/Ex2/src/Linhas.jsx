function Linhas({ children, tipo }) {
  return (
    <div className={`linha ${tipo}`}>
      {children}
    </div>
  );
}

export default Linhas;