import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// import swal from "@sweetalert/with-react";
import { Header } from "./Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "../css/app.css";

export function Listado(props) {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const token = sessionStorage.getItem("token");
  const [moviesList, setMoviesList] = useState([]);
  const [slider, setSlider] = useState([]);

  const slider1 = "https://c.tenor.com/aOj7N0TByXQAAAAC/marvel-avengers.gif";
  const slider2 =
    "https://www.cuartomundo.cl/wp-content/uploads/2018/02/Avengers-gif.gif";
  const slider3 =
    "http://33.media.tumblr.com/0d847b2563d24a84c4bb0554066280d1/tumblr_no1dnyjCnk1rp0vkjo1_500.gif";

  const slider4 = "https://acegif.com/wp-content/gifs/gif-marvel-83.gif";
  const slider5 =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/falcon-1533278569.gif?crop=1xw:1xh;center,top&resize=480:*";

  useEffect(() => {
    console.log("LIVE");
    //gsap
    gsap.to(".btn-flotante", {
      scrollTrigger: {
        trigger: ".btn-flotante",
        start: "top ",
        end: "top ",
        scrub: 3,
        markers: false,
      },
      y: "550px",
      rotation: 360,
      ease: "none",
      duration: 10,
      background: "#2bcd84",
    });
    let myArray = [slider1, slider2, slider3, slider4, slider5];
    let rand = Math.floor(Math.random() * myArray.length);
    let rValue = myArray[rand];
    setSlider(rValue);

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
  }, []);

  // const bloque = document.querySelector("div#root");

  const goToTop = () => {
    // window.scrollTo(0, 0);
    console.log("ScrollTrigger", ScrollTrigger);

    gsap.to(window, { duration: 0, scrollTo: 0 });
  };

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
        <img src={slider} alt="sliderPrincipal" className="slpr" />
        {moviesList.map((cadaPeli, index) => {
          return (
            //carta

            <div className="col-lg-3 bg-dark" key={index}>
              <div className="card my-3  desenfoque-gus">
                <Link to={`/detalle?idPelicula=${cadaPeli.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cadaPeli.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <button
                  className="favourite-btn-gus"
                  onClick={() => console.log("Agregaste a favoritos! ^^")}
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
      <div>
        {" "}
        <button onClick={goToTop} className="btn-flotante">
          Up!
        </button>
      </div>
    </>
  );
}
