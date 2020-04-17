# Cloud Foundry App Setup:

Lo primero que tenemos que crear es un recurso de desarrollo de aplicaciones llamado toolchain.

<img src="https://i.ibb.co/561gFCy/image.png" width="1000">

Para nuestro caso ya que es una webapp desarrollada en ReactJS, usaremos la siguiente opcion.

<img src="https://i.ibb.co/mqwSGct/image.png" width="1000">

Nosotros le agregamos la compatibilidad con linea de comandos Git para poder realizar commits desde el desarrollo local directamente a nuestra Cloud Foundry app

<img src="https://i.ibb.co/0ZPKcnr/image.png" width="1000">

Todos los archivos de nuestra plataforma los subiremos mediante commits y podremos verlos con la herramienta Eclipse Orion Web IDE.

<img src="https://i.ibb.co/YcjgfbZ/image.png.png" width="1000">

Aqui una muestra de los archivos que tenemos en nuestra app y como el estatus de la app esta puesta como running: normal

<img src="https://i.ibb.co/cFgkCRj/image.png" width="1000">

Independientemente de la app que subas, es necesario que tengas el archivo manifiest.yml que adjuntamos en esta carpeta para que tu app haga un correcto deploy.

Todo el control de versiones de nuestra app se lleva mediante el sistema que nos proporciona la toolchain de git.

<img src="https://i.ibb.co/6yBRGwd/image.png" width="1000">

# Progressive Web App:

https://main.covital.com.mx/

Nota: Los archivos de nuestra pagina web estan en la carpeta "webpage".

Nuestra pagina web cuenta con los siguientes elementos:

- Header de información de contacto y nombre de la app:

<img src="https://i.ibb.co/7X8vD38/image.png" width="1000">

- Mapa de confirmados de COVID-19 en Mexico, los datos del mapa se obtienen de la API del la secretaria de salud de mexico y esta esta api embebida dentro de nuestra propia API de IBM API Gateway ya que les realizamos un pre-procesamiento para facilitar su uso en la pagina, en el lado derecho tenemos un visualizador de datos por estado, el cual a su vez ayuda mucho en la version movil para facilitar la visualización y claro no podia faltar nuestra gráfica de el crecimiento de los contagiados a lo largo del tiempo, en nuestro caso la gráfica empieza desde 02/27/2020.

<img src="https://i.ibb.co/jGS5TVM/image.png" width="1000">

- En esta seccion tenemos una casilla de información donde mostramos los siguiente topicos como informacion general para la gente, los datos de esta seccion son llamados por API desde API Gateway:

  - Correcto lavado de manos
  - Cubrebocas: Tipos y uso correcto
  - Fases y medidas preventivas durante una pandemia
  - Sintomas
  - ¿Que hacer si sospechas que tienes COVID-19?
  - Fuentes Oficiales

<img src="https://i.ibb.co/GnDGMC3/image.png" width="1000">

- En esta seccion tenemos un análisis de la positividad de cada uno de los estados realizando procesamiento en tiempo real de los tweets que realiza la gente y analizándolos mediante el resource de IBM llamado Tone Analyzer, este proceso se explicara en detalle en la sección "Twitter - Watson", los datos de esta seccion son llamados por API desde API Gateway:

Para facilitar la visualización de el estado representamos el porcentaje con un emoji y el numero de porcentaje abajo.

<img src="https://i.ibb.co/VwdzZm9/image.png" width="1000">

- Seccion de noticias que recopila los 3 ultimos tweets de nuestra cuenta de noticias https://twitter.com/ICovital.

<img src="https://i.ibb.co/WWc7rkt/image.png" width="1000">

- Seccion de noticias falsas recopila los 3 ultimos tweets de nuestra cuenta de noticias falsas sobre el COVID-19 https://twitter.com/fcovid20.

<img src="https://i.ibb.co/VwdzZm9/image.png" width="1000">