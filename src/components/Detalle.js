import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./Header";
import TitulosSimilares from "./TitulosSimilares";
import swal from "@sweetalert/with-react";
import { useSearchParams } from "react-router-dom";

export function Detalle(props) {
  let token = sessionStorage.getItem("token");
  // let query = new URLSearchParams(window.location.search);
  // let idPelicula = query.get("idPelicula");
  let API_KEY = "eb4b4d4c70bdc53fa1ac4ee02b47664e";

  const [searchParams, setSearchParams] = useSearchParams([]);
  let idpeligus = searchParams.get("idPelicula");

  const [peli, setPeli] = useState();

  useEffect(() => {
    const endPointPeli = `https://api.themoviedb.org/3/movie/${idpeligus}?api_key=${API_KEY}&language=es-ES`;
    axios
      .get(endPointPeli)
      .then((response) => {
        const detallesData = response.data;
        setPeli(detallesData);
      })
      .catch((err) => {
        swal("Error, no estás logueado");
      });
  }, [searchParams]);

  return (
    <>
      {!token && <Navigate to={"/"} />}
      {/* <h2 className="text-light">-Detalle </h2> */}

      <Header favs={props.favs} />

      {peli && (
        <div className="row">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff25a865063407.5b2527aae74a8.gif"
            alt="netflix"
          />
          {/* poner boton de atras (me falta posicionarlo) */}
          {/* <button
            className="back-btn-gus"
            onClick={() => console.log("Volviste atras! ^^")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32170.png"
              alt="altqseyo"
            />
          </button> */}

          <div className="col-4">
            <div className="divider py-1 bg-light"></div>

            <img
              src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-8 text-light">
            <h1> {peli.title}</h1>
            <br />
            <h5>Fecha de estreno: {peli.release_date} </h5>
            {/* <h5>Género: {peli.genres[0].name}</h5> */}
            <h5>
              Género:{" "}
              {peli.genres.map((cadaGenero) => (
                <span key={cadaGenero.id}>{cadaGenero.name + " - "}</span>
              ))}
            </h5>
            <br />
            <h5 className="">Sinopsis:</h5>
            <p>{peli.overview}</p>
          </div>
          {/* <TitulosSimilares prop={peli.title} /> */}
          <TitulosSimilares prop={peli} />
        </div>
      )}
    </>
  );
}
