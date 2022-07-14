import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "@sweetalert/with-react";

const TitulosSimilares = (props) => {
  // console.log("EL TITULO ES " + JSON.stringify(props.prop.title));
  // console.log("La funcion es  " + JSON.stringify(props.prop2));

  const [moviesResults2, setMoviesResults2] = useState([]);

  // console.log("cuantas veces entra aca (fuera del useEffect?");

  let tituloBuscado = props.prop.title;
  // let idPeli = peli.prop.id;

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=eb4b4d4c70bdc53fa1ac4ee02b47664e&language=en-US&page=1&include_adult=false&query=${tituloBuscado.substr(
      0,
      [4]
    )}`;
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data.results;
        setMoviesResults2(apiData);
        // console.log("cuantas veces entra aca?");
        // setMoviesResults(apiData.results);
      })
      .catch((error) => {
        swal(<h2>Hubo errores, intenta mas tarde!</h2>);
      });
  }, []);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1 className="text-gus-text-white txtlistado">Títulos similares</h1>

      <div className="row">
        {moviesResults2.map((cadaPeli, index) => {
          return (
            //carta
            <div className="col-lg-2 bg-dark" key={index}>
              <div className="card my-3 desenfoque-gus">
                <Link
                  to={`/detalle?idPelicula=${cadaPeli.id}`}
                  onClick={goToTop}
                >
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
                    onClick={goToTop}
                  >
                    Detalle
                  </Link>
                </div>
                <button
                  className="favourite-btn-gus"
                  onClick={props.prop2.addOrRemoveFromFavs}
                  data-movie-id={cadaPeli.id}
                >
                  🖤
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitulosSimilares;
