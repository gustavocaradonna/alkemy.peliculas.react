import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Listado() {
  const navi = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token === null) {
      navi("/");
    }
  }, []);

  return <h2>Estas Logueado!</h2>;
}
