//importo libreria react
import React from 'react';

//importo paquete ReactDOM
import ReactDOM from 'react-dom/client';

//importo el componente principal
import App from './App';

//importo css
import './css/main.css'


//crear un punto inicial donde la appa se va a renderizar
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);

