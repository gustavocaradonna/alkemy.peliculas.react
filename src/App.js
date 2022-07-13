import "./App.css";
// import * as React from "react";
//components
import { Login } from "./components/Login";
import { Listado } from "./components/Listado";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Detalle } from "./components/Detalle";
import { Resultado } from "./components/Resultado";

import Saludo from "./components/Saludo";
//libraries
import { Routes, Route } from "react-router-dom";
//styles
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import Favoritos from "./components/Favoritos";
import { useState, useEffect } from "react";

function App() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favsInLocal = sessionStorage.getItem("favs");
    console.log("figura esto: ", favsInLocal);

    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      console.log(favsArray);
      setFavs(favsArray);
    }
  }, []);

  const favMovies = sessionStorage.getItem("favs");

  let tempMoviesInFav;
  if (favMovies === null) {
    tempMoviesInFav = [];
  } else {
    tempMoviesInFav = JSON.parse(favMovies);
  }

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imageUrl = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const id = btn.dataset.movieId;

    const movieData = {
      imageUrl,
      title,
      overview,
      id,
    };

    let existe = tempMoviesInFav.find((peli) => {
      return peli.id === movieData.id;
    });

    if (!existe) {
      tempMoviesInFav.push(movieData);
      sessionStorage.setItem("favs", JSON.stringify(tempMoviesInFav));
      setFavs(tempMoviesInFav);
      console.log("Se agrego la pelicula");
    } else {
      let moviesLeft = tempMoviesInFav.filter((peli) => {
        return peli.id !== movieData.id;
      });
      tempMoviesInFav = moviesLeft;
      sessionStorage.setItem("favs", JSON.stringify(moviesLeft));
      setFavs(tempMoviesInFav);
      console.log("Se Removió la pelicula");
    }
    console.log("tempMoviesInFav ahora es:", tempMoviesInFav);
    console.log("Session storage tiene ", sessionStorage);
  };

  return (
    <>
      <div className=" backgroundPrincipal ">
        {/* <div className="container-fluid"> */}
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/listado"
            element={
              <Listado addOrRemoveFromFavs={addOrRemoveFromFavs} favs={favs} />
            }
          />
          <Route
            path="/detalle"
            element={
              <Detalle addOrRemoveFromFavs={addOrRemoveFromFavs} favs={favs} />
            }
          />
          <Route
            path="/resultado"
            element={
              <Resultado
                addOrRemoveFromFavs={addOrRemoveFromFavs}
                favs={favs}
              />
            }
          />
          <Route
            path="/favoritos"
            element={
              <Favoritos
                addOrRemoveFromFavs={addOrRemoveFromFavs}
                favs={favs}
              />
            }
          />
        </Routes>

        <Footer />
        {/* <Saludo persona="Marcelo" /> */}
      </div>
    </>
  );
}

export default App;
