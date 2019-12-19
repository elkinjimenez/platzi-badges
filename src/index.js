// const element = document.createElement('h1');
// element.innerText = 'Hola, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';


//ESTO ES JSX -- SIEMPRE DEBE ESTAR IMPORTADO REACT
const element = <h1>Hola, ¡Platzi Badges from React!</h1>

const container = document.getElementById('app');

ReactDOM.render(element, container);

