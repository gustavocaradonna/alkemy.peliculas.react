import { Link } from "react-router-dom";
import { Buscador } from "./Buscador";

export function Header() {
  return (
    <header>
      <div className="container">
        {/* <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand mb-0 h1">
              Home
            </Link>

            <Link to="/listado" className="navbar-brand mb-0 h1">
              Listado
            </Link>
          </div>
        </nav> */}

        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link to={"/"} className="navbar-brand mb-0 h1">
            <h3 className="text-light ">Login</h3>
          </Link>
          <Link to="/listado" className="navbar-brand mb-0 h1">
            <h3 className="text-light ">Listado</h3>
          </Link>
          <div className="align-items-right"></div>
          {/* aca iria el buscador */}
          <Buscador />
        </nav>
      </div>
      {/* <div className="divider py-1 bg-light"></div> */}
    </header>
  );
}
