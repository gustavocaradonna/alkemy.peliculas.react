export function Buscador() {
  const submitHandler = (e) => {
    e.preventDefault();
    const palabra = e.currentTarget.keyword.value;
    console.log(palabra);

    if (palabra === "") {
      alert("Ingrese una palabra");
    }
  };

  return (
    // <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //   <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
    //   <form className="d-flex" onSubmit={submitHandler}>
    //     <input
    //       className="form-control me-2"
    //       type="text"
    //       placeholder="Escriba una película"
    //       aria-label="Search"
    //     />
    //     <button className="btn btn-outline-primary" type="submit">
    //       Buscar
    //     </button>
    //   </form>
    // </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

      <form className="d-flex align-items-center " onSubmit={submitHandler}>
        <label className="form-label mb-0 mx-2">
          <input
            className="form-control"
            type="text"
            name="keyword"
            placeholder="Escribe una palabra clave..."
          />
        </label>
        <button className="btn btn-outline-primary  " type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}
