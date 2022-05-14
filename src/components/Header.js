import { Link } from "react-router-dom";

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

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand mb-0 h1" href="a">
              Login
            </Link>
            <Link to="/listado" className="navbar-brand mb-0 h1">
              Listado
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
