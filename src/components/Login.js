import axios from "axios";
import swal from "@sweetalert/with-react";

export function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
    const PATH_API_ALKEMI = "http://challenge-react.alkemy.org";
    const email = e.target.email.value;
    const password = e.target.password.value;

    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    // console.log(regex.test(email));

    if (email === "" || password === "") {
      swal(<h2>Los campos no pueden estar vacios</h2>);
    } else if (email !== "" && !regex.test(email)) {
      swal(<h2>Debes escribir una direccion de correo electronico valida</h2>);
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      swal(<h2>Credenciales inválidas</h2>);
    } else {
      swal(
        <h2>
          Credenciales correctas! Estamos listos para enviar la información
        </h2>
      );
      axios
        .post(PATH_API_ALKEMI, { email, password })
        .then((result) => {
          console.log(result.data);
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

//funcion 2 de un mismo componente
export function HolaReact() {
  return <h1>Hola mundo react</h1>;
}
