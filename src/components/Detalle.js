import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export function Detalle() {
  const token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let idPelicula = query.get("idPelicula");

  useEffect(() => {
    console.log(idPelicula);
  }, [idPelicula]);

  return (
    <>
      {!token && <Navigate to={"/"} />}
      <h2>Mi detalle</h2>
      <div className="row">
        <div className="col-4">imagen peli</div>
        <div className="col-8">
          <h5>Titulo</h5>
          <h5>Genero</h5>
          <h5>Actores</h5>
          <p>
            Sinopsis: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Neque voluptatem laborum sed vero sequi natus corporis assumenda
            omnis repudiandae suscipit adipisci nostrum, explicabo ullam
            repellat aliquid id aliquam odio consequatur?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsam natus, iste deserunt
            eligendi, animi, voluptatem facere hic nulla id veniam iusto
            temporibus perspiciatis. Consectetur cumque, repellat nisi excepturi
            quia dignissimos?
          </p>
        </div>
      </div>
    </>
  );
}
