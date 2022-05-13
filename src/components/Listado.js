import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export function Listado() {
  const navi = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navi("/");
    }
  });

  return (
    <>
      <h1>Estas Logueado</h1>
      <br></br>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="asd" className="btn btn-danger">
                Ver datos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
