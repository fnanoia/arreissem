# arreissem

Arreissem es la aplicacion de un e-commerce de herramientas electricas/a bateria. Cuenta con un catalogo de productos disponibles en la navegacion de la app, y posterior compra del cliente. Trabaja con 3 grandes marcas: Bosch, DeWalt y Skil. Una vez definida la compra, posee un formulario de contacto para ingresar los datos del cliente y asi coorinar la entrega del producto, quien va a obtener un numero de orden para realizar el seguimiento de su compra.

#### Tecnologias aplicadas

react: v18.1.0,
react-dom: v18.1.0,
react-router-dom: v6.3.0,
react-icons: v4.4.0,
react-hot-toast: v2.3.0
firebase: v9.8.4

El proyecto esta desarrollado con el framework React JS, utilizando el paquete "create-react-app" como iniciador de la aplicacion. Adicionalmente se toman recursos de los paquetes "react-dom" y "react-router-dom" para trabajar con la renderizacion de la aplicacion y establecer la logica de las rutas de navegacion

Con respecto a la informacion y su tratamiento, se utiliza Firebase/Firestore como base de datos. Aqui esta cargado el catalogo de productos y se almcaena la informacion captada en el formulario de contacto.

En la parte del UI, la maquetacion esta hecha en CSS3, utilizando dos librerias para complementar el diseño: "react-icons" para los iconos y "react-hot-toast" para las notificaciones

#### Funcionalidades extra

La aplicacion cuenta con una search-bar para filtrar los productos de forma mas rapida y personalizada. Esta conectada con la BD, para traer la informacion que solicita el usuario y visualizarla en la navegacion


#### Uso/instalacion

Para experimentar la aplicacion, los pasos a seguir son: 
hacer una copia del repositorio de Github, y listar 2 comandos en la terminal para inicializar el proyecto en el navegador. Primero abrimos un terminal y nos situamos en la carpeta donde se va a descargar el proyecto. Luego ingresamos los siguientes comandos:
```
git clone https://github.com/fnanoia/arreissem.git
npm i
npm start

```

### Deploy

gif + deploy en netlify/vercel

