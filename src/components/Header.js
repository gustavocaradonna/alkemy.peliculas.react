import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand mb-0 h1">
              Home
            </Link>

            <Link to="/listado" className="navbar-brand mb-0 h1">
              Listado
            </Link>

            <Link to="/contacto" className="navbar-brand mb-0 h1">
              Contacto
            </Link>

            <Link to="/testing" className="navbar-brand mb-0 h1">
              test
            </Link>

            <Link to="/testing2" className="navbar-brand mb-0 h1">
              testing
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
