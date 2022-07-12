import { useNavigate } from "react-router-dom";

export function Buscador() {
  let navi = useNavigate();

  let submitHandler = (e) => {
    e.preventDefault();
    let keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      alert("Ingrese una palabra");
    } else {
      navi(`/resultado?=${keyword}`, console.log("algo"));
      e.currentTarget.keyword.value = "";
    }
  };

  return (
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
        <button className="btn btn-outline-danger  txtbuscar" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}
