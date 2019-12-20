// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./components/Badge";

//ESTO ES JSX -- SIEMPRE DEBE ESTAR IMPORTADO REACT
// const element = <h1>Hola, ¡Platzi Badges from React!</h1>;

// const element = document.createElement('h1');
// element.innerText = 'Hola, Platzi Badges!';

var nombre = "elkin";

// const element = React.createElement("h1", {}, `Hola, soy el hijo de ${nombre}`);

const jsx = (
  <div>
    <h1>Hola, soy {nombre}</h1>
    <h5>Y estudio en Platzi!</h5>
  </div>
);

const container = document.getElementById("app");

ReactDOM.render(<Badge firstname="ELkin" lastname="Jimenez" />, container);
