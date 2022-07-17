# arreissem

Arreissem es la aplicación de un e-commerce de herramientas eléctricas/a batería. Cuenta con un catálogo de productos disponibles en la navegación de la app, y posterior compra del cliente. Trabaja con 3 grandes marcas: Bosch, DeWalt y Skil. Una vez definida la compra, posee un formulario de contacto para ingresar los datos del cliente y así coordinar la entrega del producto, quien va a obtener un numero de orden para realizar el seguimiento de su compra.

#### Tecnologías aplicadas

* react: v18.1.0,
* react-dom: v18.1.0,
* react-router-dom: v6.3.0,
* react-icons: v4.4.0,
* react-hot-toast: v2.3.0
* firebase: v9.8.4

El proyecto está desarrollado con el framework React JS, utilizando el paquete "create-react-app" como iniciador de la aplicación. Adicionalmente se toman recursos de los paquetes "react-dom" y "react-router-dom" para trabajar con la renderización de la aplicación y establecer la lógica de las rutas de navegación

Con respecto a la información y su tratamiento, se utiliza Firebase/Firestore como base de datos. Aquí está cargado el catálogo de productos y se almacena la información captada en el formulario de contacto

En la parte del UI, la maquetación está hecha en CSS3, utilizando dos librerías para complementar el diseño: "react-icons" para los iconos y "react-hot-toast" para las notificaciones

#### Funcionalidades extra

La aplicación cuenta con una search-bar para filtrar los productos de forma más rápida y personalizada. Está conectada con la BD, para traer la información que solicita el usuario y visualizarla en la navegación


#### Uso/instalación

Para experimentar la aplicación, los pasos a seguir son:
hacer una copia del repositorio de Github, y listar 2 comandos en la terminal para inicializar el proyecto en el navegador. Primero abrimos un terminal y nos situamos en la carpeta donde se va a descargar el proyecto. Luego ingresamos los siguientes comandos:
```
git clone https://github.com/fnanoia/arreissem.git
npm i
npm start

```

### Deploy

[arreissem](https://arreissem.netlify.app/)

![Alt text](https://media.giphy.com/media/hwLFWXznMz6yvY0S41/giphy.gif)
