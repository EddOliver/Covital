# Cloud Foundry App Setup:

The first thing we have to create is an application development resource called toolchain.

<img src="https://i.ibb.co/561gFCy/image.png" width="1000">

In our case, since it is a webapp developed in ReactJS, we will use the following option.

<img src="https://i.ibb.co/mqwSGct/image.png" width="1000">

We added Git command line support to be able to commit from local development directly to our Cloud Foundry app.

<img src="https://i.ibb.co/0ZPKcnr/image.png" width="1000">

All the files of our platform will be uploaded by commits and we will be able to see them with the Eclipse Orion Web IDE tool.

<img src="https://i.ibb.co/YcjgfbZ/image.png.png" width="1000">

Here is a sample of the files that we have in our app and how the status of the app is set to running: normal

<img src="https://i.ibb.co/cFgkCRj/image.png" width="1000">

Regardless of the app you upload, you need to have the manifest.yml file that we attach in this folder for your app to do a proper deploy.

All version control of our app is carried out through the system provided by the git toolchain.

<img src="https://i.ibb.co/2g6KZRQ/image.png" width="1000">

# Progressive Web App:

https://main.covital.com.mx/

Note: The files on our website are in the "webpage" folder.

Our website has the following elements:

- Header of contact information and app name:

<img src="https://i.ibb.co/P9Ct4GZ/image.png" width="1000">

- Confirmed map of COVID-19 in Mexico, the map data is obtained from the API of the Secretary of Health of Mexico and this is embedded within our own API of IBM API Gateway since we perform a pre-processing to facilitate its use on the page, on the right side we have a data viewer by state, which in turn helps a lot in the mobile version to facilitate the visualization and of course our graph of the growth of the infected throughout the year could not be missing time, in our case the graph starts from 02/27/2020.

<img src="https://i.ibb.co/vcJhDHZ/image.png" width="1000">

- En esta seccion tenemos una casilla de información donde mostramos los siguiente topicos como informacion general para la gente, los datos de esta seccion son llamados por API desde API Gateway:

  - Correcto lavado de manos
  - Cubrebocas: Tipos y uso correcto
  - Fases y medidas preventivas durante una pandemia
  - Sintomas
  - ¿Que hacer si sospechas que tienes COVID-19?
  - Fuentes Oficiales

<img src="https://i.ibb.co/vxkCRTS/image.png" width="1000">

- In this section we have an information box where we show the following topics as general information for people, the data in this section is called by API from API Gateway:

Correct hand washing
Mouthguards: Types and correct use
Phases and preventive measures during a pandemic
Symptoms
What to do if you suspect you have COVID-19?
Official sources

- In this section we have an analysis of the positivity of each of the states, real-time processing of tweets made by people and analyzing them using the IBM resource called Tone Analyzer, this process will be explained in detail in the section "Twitter - Watson ", the data in this section is called by API from API Gateway:

To facilitate the visualization of the state, we represent the percentage with an emoji and the percentage number below.

<img src="https://i.ibb.co/kBKsXKb/image.png" width="1000">

- News section that collects the last 3 tweets of our news account https://twitter.com/ICovital.

<img src="https://i.ibb.co/8c789XL/image.png" width="1000">

- Fake News Section collects the last 3 tweets from our COVID-19 fake news account https://twitter.com/fcovid20.

<img src="https://i.ibb.co/qmKg27p/image.png" width="1000">
