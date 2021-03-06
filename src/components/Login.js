import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

import { gsap } from "gsap";

//css
import "../css/login.css";
import { useEffect } from "react";
import swal from "@sweetalert/with-react";

export function Login() {
  const sonidoNetflix = new Audio(
    "https://nuevotono.net/audios/mp3/5faed5a672df5.mp3"
  );

  const navi = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const PATH_API_ALKEMI = "http://challenge-react.alkemy.org";
    const email = e.target.email.value;
    const password = e.target.password.value;

    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    // console.log(regex.test(email));

    if (email === "" || password === "") {
      swal("Los campos no pueden estar vacios");
    } else if (email !== "" && !regex.test(email)) {
      swal("Debes escribir una direccion de correo electronico valida");
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      swal("Credenciales inválidas");
    } else {
      axios
        .post(PATH_API_ALKEMI, { email, password })
        .then((result) => {
          console.log(
            "Credenciales correctas! Estamos listos para enviar la información"
          );
          // swal("Funciona ok gus?");
          // console.log(result.data);
          const tokenRecibido = result.data.token;
          // console.log(tokenRecibido);
          sessionStorage.setItem("token", tokenRecibido);
          navi("/listado");

          //sonido
          setTimeout(function () {
            // sonidoNetflix.play();
          }, 1);
          //fin sonido
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const token = sessionStorage.getItem("token");

  //GSAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
  const timeLine = gsap.timeline();
  useEffect(() => {
    const bloque = document.querySelectorAll(".bounceGus");
    timeLine.to(bloque, {
      opacity: 1,
      duration: 0,
      // x: 200,
      // ease: "bounce",
      scale: 1,
      stagger: 0.1,
    });
    //segundo efecto
    const bloque2 = document.querySelectorAll(".greenGus");

    timeLine.from(bloque2, {
      duration: 0.75,
      // ease: "bounce",
      // scale: 0.1,
      x: -1200,
    });
  }, []);

  return (
    <>
      {token && <Navigate to={"/listado"} />}

      {/* <div className=" loginPrincipal"> */}

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/66cec32d-b40b-4349-8f1e-4c127c0be56e/AR-es-20220704-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        className="imgbk"
      />

      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=""
        className="imgNetflix"
      />
      <section className="vh-100 gradient-custom ">
        <div className="container py-5 h-100  ">
          <div className="row d-flex justify-content-center align-items-center h-100   ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5  ">
              <div className="card-body p- text-center greenGus">
                <div className="mb-md-5 mt-md-4 pb-5 ">
                  <h2 className="fw-bold mb-2 text-white bounceGus">
                    Iniciar sesión
                  </h2>
                  <br />

                  <form onSubmit={submitHandler}>
                    <div className="form-outline form-white mb-4 bounceGus">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        name="email"
                        placeholder="Ingrese email"
                      />
                    </div>

                    <div className="form-outline form-white mb-4 bounceGus">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        name="password"
                        placeholder="Ingrese clave"
                      />
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5 bounceGus"
                      type="submit"
                      // onClick={() => {

                      // }}
                    >
                      Ingresar
                    </button>
                  </form>

                  {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        //fin */}
      {/* </div> */}
    </>
  );
}
