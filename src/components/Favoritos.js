import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "./Header";
import { Link } from "react-router-dom";

const Favoritos = () => {
  const [favs, setFavs] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const favsInLocal = sessionStorage.getItem("favs");
    console.log("figura esto: ", favsInLocal);

    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      console.log(favsArray);
      setFavs(favsArray);
    }
  }, []);

  return (
    <>
      {!token && <Navigate to={"/"} />}
      <Header />
      {/* <h1 className="bg-primary  row align">NetFlix!</h1> */}

      {/* {estructura base} */}
      <div className="row">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff25a865063407.5b2527aae74a8.gif"
          alt="netflix"
        />
        {favs.map((cadaPeli, index) => {
          return (
            //carta

            <div className="col-lg-3 bg-dark" key={index}>
              <div className="card my-3  desenfoque-gus">
                <Link to={`/detalle?idPelicula=${cadaPeli.id}`}>
                  <img
                    src={cadaPeli.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                {/* <button
                  className="favourite-btn-gus"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={cadaPeli.id}
                >
                  🖤
                </button> */}

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
      {/* aca estaba */}
      {/* <div>
        {" "}
        <button onClick={goToTop} className="btn-flotante">
          Up!
        </button>
      </div> */}
    </>
  );
};
export default Favoritos;
