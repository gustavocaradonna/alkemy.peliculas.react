import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export function Resultado() {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=eb4b4d4c70bdc53fa1ac4ee02b47664e&language=en-US&page=1&include_adult=false&query=${keyword}`;

    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data.results;
        setMoviesResults(apiData);

        // setMoviesResults(apiData.results);
      })
      .catch((error) => {
        alert(<h2>Hubo errores, intenta mas tarde!</h2>);
      });
  }, [moviesResults]);

  return (
    <>
      <Header />
      <h2 className="text-light">Tu búsqueda: {keyword}</h2>

      <div className="row">
        {moviesResults.map((cadaPeli, index) => {
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
    </>
  );
}