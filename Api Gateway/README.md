# Api Gateway Setup:

En esta seccion mostrare como es el proceso de configuración de nuestra api gateway. 

<img src="https://i.ibb.co/D749zy3/APIDiagram.png" width="1000">

# API Creation:

Primero buscamos el servicio de API Gateway y cremos el recurso.

<img src="https://i.ibb.co/jyQCNK0/image.png" width="1000">

Para nuestra apicacion decidimos crear una API gateway basada en Cloud Functions, debido a que hibamos a requeria integrar el servicio de Cloud Object Storage y preprocesamiento en Python.

<img src="https://i.ibb.co/rytWDmC/image.png" width="1000">

Recomiendo revisar un poco todos estos menus para que te familiarices con ellos, sin embargo como primera tarea vamos a crear las acciones que va a ejecutar nuestra API.

<img src="https://i.ibb.co/vxG6yKm/image.png" width="1000">

En este caso el proceso para crear las 4 Actions sera el mismo, asi que presionamos en boton "Create" 

<img src="https://i.ibb.co/RQNF1pg/image.png" width="1000">

Ya que no usaremos "Actions" con ningún paquete adicional de python o nodejs, simplemente presionaremos el botón de "Create Action"

<img src="https://i.ibb.co/K5WGQ8y/image.png" width="1000">

En cada una de las Actions le pondremos el nombre correspondiente a cada accion y selecionaremos el Runtime que requiramos en nuestro caso utilizamos Python y NodeJS.

<img src="https://i.ibb.co/Y34p7nW/image.png" width="1000">

Las acciones que creamos fueron las siguientes:

- carousel - (NodeJS) - Proporciona la información de los carruseles de nuestra pagina web.
- mexinfo - (Python) - Proporciona la información de patentes confirmados de Covid-19 en Mexico para ser expuesta en la pagina web, API de la secretaria de salud de Mexico.
- twitter-cos - (Python) - Obtiene el archivo con la información se polaridad emocional guardado en Cloud Object Storage, lo abre, lo decodifica y lo manda como response a la pagina web para desplegar el mapa de polaridad emocional.
- news - (Python) - Manda la lista de tweets que se van a desplegar en la pagina web.

NOTA: para la accion de twitter-cos debemos poner nuestras propias credenciales de COS, este proceso lo explicamos a detalle en el README de la carpeta Twitter - Watson.
- https://github.com/EddOliver/Covital/blob/master/Twitter%20-%20Watson/README.md

Para cada Action, pegaremos el código correspondiente y le daremos en guardar.

<img src="https://i.ibb.co/27C5c5z/image.png" width="1000">

Ahora nos vamos a la seccion de API para crear nuestra API.

<img src="https://i.ibb.co/TkC41Gq/image.png" width="1000">

Primero vamos a nombrar a nuestra API y le añadiremos las acciones con el botón de Create Operation.

<img src="https://i.ibb.co/Jnc5sWJ/image.png" width="1000">

Como ejemplo configurare la acción de news.

<img src="https://i.ibb.co/XDnHCVS/image.png" width="1000">

Para mayor seguridad de la Api le agregamos una Api Key.

<img src="https://i.ibb.co/jhX1zws/image.png" width="1000">

Todo lo demas lo dejamos tal como esta y seleccionamos el boton del fondo que dice Create (ya por default esta activado el CORS, dejalo asi para poder llamar la Api desde tu pagina web).

<img src="https://i.ibb.co/XJ3hW6S/image.png" width="1000">

Una vez hecho esto entraremos a la Api y a la opcion API Explorer.

Nota: la apikey para llamar a la API esta en el boton que dice Sharing and Keys

<img src="https://i.ibb.co/8mgJT5S/image.png" width="1000">

Podemos observar dentro de este menu una seccion de codigo para probar que nuestra API funciona.

<img src="https://i.ibb.co/GQjkfGY/image.png" width="1000">

En mi caso hice la prueba de mi API en el programa Postman y aqui un screenshot de como esta funcionando.

<img src="https://i.ibb.co/Lv0197s/image.png" width="1000">

Todas las llamadas de estas API a la pagina web se realizaron con el modulo request para ReactJS.

    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://ABCDFG.us-south.apigw.appdomain.cloud/YOUR-API/YOURACTION',
      'headers': {
        'accept': 'application/json',
        'x-ibm-client-id': 'xxxx-xxxxxxxx-xxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx'
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      console.log(response.body);
    });

