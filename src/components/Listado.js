import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// import swal from "@sweetalert/with-react";
import { Header } from "./Header";

export function Listado() {
  const token = sessionStorage.getItem("token");
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

    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
      .catch((error) => {
        alert(<h2>Hubo errores, intenta mas tarde!</h2>);
      });
  }, [setMoviesList]);

  return (
    <>
      {!token && <Navigate to={"/"} />}
      <Header />
      <h1 className="bg-primary justify-content-center row align">NetFlix!</h1>
      {/* {estructura base} */}
      <div className="row">
        {moviesList.map((cadaPeli, index) => {
          return (
            //carta
            <div className="col-3 bg-dark" key={index}>
              <div className="card my-3">
                <Link to={`/detalle?idPelicula=${cadaPeli.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cadaPeli.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {cadaPeli.title.substring(0, 25)}
                  </h5>
                  <p className="card-text">
                    {cadaPeli.overview.substring(0, 67)}...
                  </p>
                  <Link
                    to={`/detalle?idPelicula=${cadaPeli.id}`}
                    className="btn btn-primary"
                  >
                    Detalle
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </>
  );
}
