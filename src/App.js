import "./App.css";
import * as React from "react";
//components
import { Login } from "./components/Login";
import { Listado } from "./components/Listado";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Detalle } from "./components/Detalle";
//libraries
import { Routes, Route } from "react-router-dom";
//styles
// import "./css/app.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Resultado } from "./components/Resultado";

function App() {
  return (
    <>
      <div className="container bg-dark">
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
