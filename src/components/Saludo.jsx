import React, { Fragment } from "react";

const Saludo = (props) => {
  // console.log(props);
  return (
    <div>
      <h1 className="text-light text-gus">Hola {props.persona} </h1>
    </div>
  );
};

export default Saludo;
