import { Link, Navigate, useNavigate } from "react-router-dom";
import { Buscador } from "./Buscador";
import { useState, useEffect } from "react";
import "../css/header.css";

export function Header() {
  const navi = useNavigate();

  const [log, setLog] = useState(true);

  useEffect(() => {
    if (!log) {
      navi("/");
    }
  }, [log]);

  return (
    <header>
      <></>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link to={"/"} className="navbar-brand mb-0 h1 ">
          <h3 className="text-light ">Login</h3>
        </Link>
        <Link to="/listado" className="navbar-brand mb-0 h1 ">
          <h3 className="text-light ">Listado</h3>
        </Link>
        {/* <div className="align-items-right"></div> */}
        {/* aca iria el buscador */}
        <Buscador />
        <button type="button">
          {" "}
          <img
            src="https://www.pngkit.com/png/detail/776-7768559_logout-icon-png-transparent-login-logout-icon-png.png"
            height="38"
            width="38"
            alt="troll"
            onClick={() => [sessionStorage.clear(), setLog(false)]}
          />
        </button>
      </nav>

      {/* <div className="divider py-1 bg-light"></div> */}
    </header>
  );
}
