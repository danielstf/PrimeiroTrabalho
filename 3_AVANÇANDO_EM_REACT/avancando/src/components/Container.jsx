const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este éo Titulo do Container</h2>

      {children}

      <p>O Valor do Myvalue: {myValue}</p>
    </div>
  );
};

export default Container;
