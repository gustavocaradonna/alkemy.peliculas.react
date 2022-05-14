import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Detalle() {
  const token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let idPelicula = query.get("idPelicula");

  const [peli, setPeli] = useState(null);

  useEffect(() => {
    const endPointPeli = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=eb4b4d4c70bdc53fa1ac4ee02b47664e&language=es-ES`;
    axios
      .get(endPointPeli)
      .then((response) => {
        const detallesData = response.data;
        setPeli(detallesData);
        console.log(detallesData);
      })
      .catch((err) => {
        alert("error");
      });
  }, [idPelicula]);

  return (
    <>
      {!token && <Navigate to={"/"} />}
      <h2>Detalle </h2>
      {peli && (
        <div className="row">
          <div className="col-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h5>Titulo: {peli.title}</h5>
            <h5>Fecha de estreno: {peli.release_date} </h5>
            {/* <h5>Género: {peli.genres[0].name}</h5> */}
            <h5>
              Género:{" "}
              {peli.genres.map((cadaGenero) => (
                <span key={cadaGenero.id}>{cadaGenero.name + " - "}</span>
              ))}
            </h5>

            <h5 className="">Sinopsis:</h5>
            <p>{peli.overview}</p>
          </div>
        </div>
      )}
    </>
  );
}
