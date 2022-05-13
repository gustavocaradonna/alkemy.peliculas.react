import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";

export function Listado() {
  const token = localStorage.getItem("token");
  const [moviesList, setMoviesList] = useState([]);
  // useEffect(() => {
  //   if (token === null) {
  //     navi("/");
  //   }
  // });
  // const navi = useNavigate();
  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=eb4b4d4c70bdc53fa1ac4ee02b47664e&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios.get(endPoint).then((res) => {
      const apiData = res.data;
      setMoviesList(apiData.results);
    });
  }, []);

  console.log(moviesList);

  return (
    <>
      {!token && <Navigate to={"/"} />}
      <div className="container">
        <h1 className="bg-success justify-content-center row align">
          Estas Logueado
        </h1>
      </div>

      <br></br>

      <div className="card-group">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="asd" className="card-img-top" alt="asd" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      <br />

      <Link to="asd" className="btn btn-danger">
        Ver datos
      </Link>
    </>
  );
}
