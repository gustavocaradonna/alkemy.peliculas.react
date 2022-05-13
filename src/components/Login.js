import axios from "axios";
// import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Login() {
  const navi = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const PATH_API_ALKEMI = "http://challenge-react.alkemy.org";
    const email = e.target.email.value;
    const password = e.target.password.value;

    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    // console.log(regex.test(email));

    if (email === "" || password === "") {
      alert("Los campos no pueden estar vacios");
    } else if (email !== "" && !regex.test(email)) {
      alert("Debes escribir una direccion de correo electronico valida");
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      alert("Credenciales inválidas");
    } else {
      axios
        .post(PATH_API_ALKEMI, { email, password })
        .then((result) => {
          console.log(
            "Credenciales correctas! Estamos listos para enviar la información"
          );
          console.log(result.data);
          const tokenRecibido = result.data.token;
          localStorage.setItem("token", tokenRecibido);
          navi("/listado");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <h2>Formulario de login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo electrónico:</span> <br />
          <input type="text" name="email" />
        </label>

        <br />
        <label>
          <span>Contraseña:</span> <br />
          <input type="password" name="password" />
        </label>
        <br />

        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
