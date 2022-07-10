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

function App() {
  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget;
    console.log(btn);
  };

  return (
    <>
      <div className="container-fluid  bg-dark">
        {/* <div className="container-fluid"> */}
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/listado"
            element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>

        <Footer />
        <Saludo persona="Marcelo" />
      </div>
    </>
  );
}

export default App;
