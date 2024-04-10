const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativouo evento");
  };

  const renderSomeThing = (x) => {
    if (x) {
      return <h1>renderizando isso</h1>;
    } else {
      return <h1>Tambem posso renderizar isso</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>

      <div>
        <button onClick={() => console.log("Clicou aqui")}>
          Clique aqui novamente
        </button>

        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria Existir");
            }
          }}
        >
          Clique Aqui por Favor
        </button>
      </div>
      {renderSomeThing(true)}
      {renderSomeThing(false)}
    </div>
  );
};

export default Events;
