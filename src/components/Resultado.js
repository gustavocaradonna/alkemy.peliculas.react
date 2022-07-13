import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { useSearchParams } from "react-router-dom";

export function Resultado(props) {
  // let query = new URLSearchParams(window.location.search);
  // let keyword = query.get("keyword");
  const [searchParams, setSearchParams] = useSearchParams([]);
  let result = searchParams.get("keyword");
  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=eb4b4d4c70bdc53fa1ac4ee02b47664e&language=en-US&page=1&include_adult=false&query=${result}`;

    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data.results;
        setMoviesResults(apiData);
      })
      .catch((error) => {
        alert(<h2>Hubo errores, intenta mas tarde!</h2>);
      });
  }, [searchParams]);

  return (
    <>
      <Header favs={props.favs} />
      <h2 className="text-light">Tu búsqueda: {result}</h2>
      <div className="row">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff25a865063407.5b2527aae74a8.gif"
          alt="altqseyo"
        />
        {moviesResults.map((cadaPeli, index) => {
          return (
            //carta
            <div className="col-2 bg-dark" key={index}>
              <div className="card my-3 desenfoque-gus">
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
                <button
                  className="favourite-btn-gus"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={cadaPeli.id}
                >
                  🖤
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
