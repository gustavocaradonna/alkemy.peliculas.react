import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "../css/login.css";

const Favoritos = (props) => {
  //   const [favs, setFavs] = useState([]);
  const token = sessionStorage.getItem("token");

  //   useEffect(() => {
  //     const favsInLocal = sessionStorage.getItem("favs");
  //     console.log("figura esto: ", favsInLocal);

  //     if (favsInLocal !== null) {
  //       const favsArray = JSON.parse(favsInLocal);
  //       console.log(favsArray);
  //       setFavs(favsArray);
  //     }
  //   }, []);

  useEffect(() => {
    console.log("ok no?");
    const timeLine = gsap.timeline();
    const bloque = document.querySelectorAll(".bounceGus4");
    timeLine.to(bloque, {
      opacity: 1,
      duration: 5,
      // x: 200,
      ease: "bounce.out",
      scale: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <>
      {!token && <Navigate to={"/"} />}
      <Header favs={props.favs} />
      {/* <h1 className="bg-primary  row align">NetFlix!</h1> */}

      {/* {estructura base} */}
      <div className="row">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff25a865063407.5b2527aae74a8.gif"
          alt="netflix"
        />
        {props.favs.map((cadaPeli, index) => {
          return (
            //carta

            <div className="col-lg-2 bg-dark" key={index}>
              <div className="card my-3  desenfoque-gus bounceGus4">
                <Link to={`/detalle?idPelicula=${cadaPeli.id}`}>
                  <img
                    src={cadaPeli.imageUrl}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <button
                  className="favourite-btn-gus"
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={cadaPeli.id}
                >
                  🖤
                </button>

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
