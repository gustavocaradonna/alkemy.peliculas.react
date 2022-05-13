import "./App.css";
import { Login } from "./components/Login";
import { Listado } from "./components/Listado";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  );
}

export default App;
