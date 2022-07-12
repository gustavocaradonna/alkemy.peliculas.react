import { Link, Navigate, useNavigate } from "react-router-dom";
import { Buscador } from "./Buscador";
import { useState, useEffect } from "react";
import "../css/header.css";

export function Header() {
  const navi = useNavigate();

  const [logueado, setLogueado] = useState(true);

  useEffect(() => {
    if (!logueado) {
      navi("/");
    }
  }, [logueado]);

  return (
    <header>
      <></>
      <nav className="navbar  navbar-expand-lg navbar-light">
        {/* <Link to={"/"} className="navbar-brand mb-0 h1 ">
          <h2 className="text-light txtlogincss">Login</h2>
        </Link> */}
        <Link to="/listado" className="navbar-brand mb-0 h1 ">
          <h2 className="text-light txtlistado">Listado</h2>
        </Link>

        <Link to="/favs" className="navbar-brand mb-0 h1 ">
          <h2 className="text-light txtfavs">Favs</h2>
        </Link>

        {/* <div className="align-items-right"></div> */}
        {/* aca iria el buscador */}
        <Buscador />
        <button type="button" className="txtlogoutcss">
          {" "}
          <img
            src="https://www.pngkit.com/png/detail/776-7768559_logout-icon-png-transparent-login-logout-icon-png.png"
            height="35"
            width="35"
            alt="troll"
            onClick={() => [sessionStorage.clear(), setLogueado(false)]}
          />
        </button>
      </nav>

      {/* <div className="divider py-1 bg-light"></div> */}
    </header>
  );
}
