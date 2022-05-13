import "./App.css";
import * as React from "react";
//components
import { Login } from "./components/Login";
import { Listado } from "./components/Listado";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
//libraries
import { Routes, Route } from "react-router-dom";
//styles
// import "./css/app.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
