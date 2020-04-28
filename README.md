[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [<img src="https://img.shields.io/badge/View-Website-blue">](https://main.covital.com.mx) [<img src="https://img.shields.io/badge/View-Video-red">](https://youtu.be/ZrKRTGuA2X4)

<img src="https://i.ibb.co/ZzmpyX1/COVITAL.png" width="600">

### COVID19 information aggregator and data platform for Mexico, includes IoT risk assessing devices for medical professionals.

#### Webpage: https://main.covital.com.mx/
#### Video: https://youtu.be/ZrKRTGuA2X4

# Solution summary

<img src="https://i.ibb.co/rZGghY2/diagrama.png">

#### COVITAL's solutions consist of:

#### 1. An information aggregator (https://main.covital.com.mx/) that includes:
   - Map by state that shows the number of cases in an easy manner and a graph that shows the growth of that.
   - Instructions and links regarding self-care during the pandemic
   - A machine learning Powered Emotional Positivity Map
   - A service that separates the real news from the fake news.
   
It is an IBM cloud foundry application that makes use of several of IBM’s cloud toolchains and other services, and we do ML, but we’ll get to that. The intention of this aggregator is to become a source in which you can be informed of everything regarding COVID19 for the day in less than 5 minutes and in a very simple way.

   
#### 2. An IoT Risk assesing platform for Medical Professionals that include two main devices:

   - Heart Rate and Step tracking band with Gateway [Link](https://github.com/EddOliver/Covital/tree/master/Hardware%20Gateway)
   - Clothing embedded device that tracks Temperature, Air quality, Movement, Pressure and more. [Node Red](https://github.com/EddOliver/Covital/tree/master/Node%20RED%20flow) and [Documentation](https://github.com/EddOliver/Covital/tree/master/RSL10%20Sense%20and%20control)
   
The IoT part of Our solution tracks, analyses and gives recommendations to Medical professionals in the front lines via a web app developed with IBM ioT and Node-RED. It includes a wearable band that we integrated with a set of sensors that can be embedded easily into clothing. Whenever the doctor or frontliner has performed a big number of steps or the telemetry shows that that he has over stretched via temperature, movement or other, it will send an alarm, notification and recommendations to stop and take some rest.
These kinds of measures have shown to decrease considerably the risk of these professionals. (1)
 
When we have several of these devices, we will be able to perform better analytics and even ML models, which we will incorporate into the main platform and the Emotions and Positivity map. This solution has the potential of incorporating the whole gambit of information about the current pandemic and will help us prepare for the future one. This of course employing IBM’s cloud technology, IoT and Machine Learning like it was never done before. And it might help as a model for developing countries to fight pandemics.

# Team

#### 3 Biomedical Engineers with experience developing IoT and hardware solutions.

[<img src="https://img.shields.io/badge/Luis%20Eduardo-Arevalo%20Oliver-blue">](https://www.linkedin.com/in/luis-eduardo-arevalo-oliver-989703122/)

https://www.linkedin.com/in/alejandro-s%C3%A1nchez-guti%C3%A9rrez-11105a157/

https://www.linkedin.com/in/victor-alonso-altamirano-izquierdo-311437137/


# Our commitment

1. [Inspiration and Introduction](https://github.com/EddOliver/Covital/blob/master/README.md#inspiration-and-introduction)
2. [Solution](https://github.com/EddOliver/Covital/blob/master/README.md#solution-and-what-it-does)
3. [How we built it](https://github.com/EddOliver/Covital/blob/master/README.md#how-we-built-it)
4. [Toolchain](https://github.com/EddOliver/Covital/blob/master/README.md#toolchain-and-cloudfoundry-app)
5. [API Gateway](https://github.com/EddOliver/Covital/blob/master/README.md#api-gateway)
6. [Cloud Object Storage](https://github.com/EddOliver/Covital/blob/master/README.md#cloud-object-storage)
7. [Twitter Analysis](https://github.com/EddOliver/Covital/blob/master/README.md#twitter-analysis)
8. [Updated views report](https://github.com/EddOliver/Covital/blob/master/README.md#views-report-04272020)

# Inspiration and Introduction

Pandemias ha habido muchas a lo largo de la historia, en años recientes tal vez las que mas podamos recordar fueron las enfermedades como la gripe porcina AH1N1 (2009), el SARS (2002), el ébola (2014), el MERS (coronavirus, 2015) y ahora el Covid-19.

Sin embargo, nunca tuvimos que vivir en estado de cuarentena global, nunca pensamos que sería tan veloz la instalación de la enfermedad en el mundo. En la actualidad, hay paises que incluso han generado politicas para el uso de armas de fuego contra la gente que no haga cuarentena, en muchos otros solo se promueve el aislamiento y el distanciamiento social como en mexico.

Sin embargo a pesar de las constantes peticiones de Hugo López-Gatell Ramírez, assistant secretary of Prevention and Health Promotion, de quedarse en casa y no salir, no han sido suficientes para evitar el crecimiento acelerado de los casos de Covid-19 en mexico.

<img src="https://i.ibb.co/Qm6Xxcx/stay.png" width="1000">

En redes sociales sobre todo podemos encontrar casos como estos:

- Gente realizando manualmente face masks sin saber su efectividad:
<img src="https://i.ibb.co/H74qCGp/download-1.jpg" width="1000">

- Personas que a pesar de la cuarentena van a comprar su pescado al mercado (alarmantemente desde el inicio de la pandemia este mercado en mexico ha tenido un aumento de clientes):
<img src="https://i.ibb.co/jZrcRSW/Mercado-de-La-Viga-1.jpg" width="1000">

- Gente realizando compras masivas de papel higienico:
<img src="https://i.ibb.co/P1R0rdn/skynews-covid-19-coronavirus-4952333.jpg" width="1000">

- Y claro, gente realizando saqueos masivos de supermercados desde alimentos hasta electrodomesticos:
<img src="https://i.ibb.co/XS6z0F5/unnamed.jpg" width="1000">

Desde este momento fue claro que uno de los principales problemas de Mexico ante el coronavirus fue la falta de informacion.

Para confirmar nuestra teoria decidimos realizar una encuesta de (insertar numero de personas de la encuesta) donde encontramos que el (insertar porcentaje) menciona que esta sufriendo una fuerte desinformacion sobre el coronavirus y como evitarlo, aunado a esto que no sabian donde encontrar fuentes fidedignas de informacion, por lo tanto concluimos lo siguiente:

- Las personas no saben donde consultar directamente informacion real sobre prevencion.
- Las personas comparten mucha informacion falsa por redes sociales, generalmente conpiraciones politicas.
- La mayoria de la gente no tiene una fuente real de los datos estadisticos del Covid-19, mayormente consultando varias fuentes para obetener los datos o directamente esperando diariamente a la hora de los noticieros en la television para oirlos.

<img src="https://i.ibb.co/r4ZRknx/image.png" width="300">

La conclusion es que mexico necesita una plataforma que integre todos los puntos antes mencionados, generando una plataforma no solo de datos, sino de informacion importante de prevencion, sintomas, que hacer si te enfermas, etc.

# Solution 

Creamos una plataforma que tiene 5 funciones principales:

- Realizar un mapa de calor donde podemos observar de forma visual y cuantitativa los casos  positivos de COVID-19 en mexico por cada estado.

<img src="https://i.ibb.co/v1h6sMK/image.png" width="1000">

- Proveer informacion relevante para las personas como lo es:
  - Correcto lavado de manos
  - Cubrebocas: Tipos y uso correcto
  - Fases y medidas preventivas en una pandemia
  - Sintomas del Covid-19
  - Que hacer si se sispecha de que se tienen los sintomas
  - Fuentes oficiales para consultar informacion de calidad.
  
  <img src="https://i.ibb.co/zfNVNzV/image.png" width="1000">
  
- Sensado cuantitativo de la positividad del pais en general mediante el analisis en tiempo real de los tweets en todo el pais.

  <img src="https://i.ibb.co/FbMqYRC/tweet-anal.png" width="1000">

- Seccion de noticias con las ultimas noticias veridicas

  <img src="https://i.ibb.co/Kyk5kYw/image.png" width="1000">

- Seccion de noticias falsas donde se podamos mostrarle a la gente que es verdad y que no.

  <img src="https://i.ibb.co/q54zLVg/image.png" width="1000">

# How we built it

<img src="https://i.ibb.co/Pr7gPcc/Diagrama.png" width="1000">

# Toolchain and Cloudfoundry app:

Dentro de la consola de IBM creamos una Toolchain cual nos permitiera desplegar una cloudfoundry app dentro de la cloud de ibm y a su vez nos permitiera llevar un control de versiones mediante git.

<img src="https://i.ibb.co/FxDDN1Y/image.png" width="1000">

Todo el desarrollo de la pagina se realizo mediante el framework Reactjs y se actualizaba mediante git en linea de comandos a IBM.

<img src="https://i.ibb.co/qJSnQH5/image.png" width="1000">

# API Gateway:

Toda la integracion de servicios de la pagina web se realizo a travez de los servicios de API gateway para la peticion de datos de la pagina.

<img src="https://i.ibb.co/PNYqnWB/image.png" width="1000">

Cada una de las peticiones de a la api esta asociado a una action programada en NodeJs o Python.La llamada a la API esta protegida mediante una clave X-IBM-Client-Id.

API Paths:
<img src="https://i.ibb.co/9b4Lgqv/image.png" width="1000">
API Mexico data request and processing:
<img src="https://i.ibb.co/3kghvsP/image.png" width="1000">

- /car : Webpage Carousel Data
- /news : Last Covid-19 tweets
- /mex : Last COVID-19 data in mexico.
- /twitter-cos : Last polarity data for display.

# Cloud Object Storage:

Todos los documentos de la pagina como imagenes, iconos, etc... Fueron almacenados en un bucket COS configurado para tener datos archivos publicos.

<img src="https://i.ibb.co/5nL7C82/image.png" width="1000">

# Twitter Analysis:

Para hacer el analisis de tweeter se utilizo la libreria Tweepy, para capturar todos los Twweets en tiempo real de mexico y analizarlos uno a uno con el servicio Tone Analyzer.

Nota: El servicio de Tone Analyzer funciona con texto en ingles, asi que usamos una api de traduccion de texto Español a ingles como proprocesamiento.

<img src="https://i.ibb.co/hMmczNx/image.png" width="1000">

Este servicio esta corriendo en periodos de tiempo sobre Watson Studio en una Jupyter Notebook, cada que se analizan 100 tweets el algoritmo actualiza el arhivo json con los niveles de positividad guardado de COS.

<img src="https://i.ibb.co/m6scxBS/image.png" width="1000">

# Views Report 04/27/2020

<img src="https://i.ibb.co/sVhqMJG/Screen-Shot-2020-04-27-at-16-48-44.png" width="1000">


# References

1. https://www.theverge.com/2020/3/5/21166088/coronavirus-covid-19-protection-doctors-nurses-health-workers-risk

2. https://weather.com/health/cold-flu/news/2020-01-09-17-things-you-probably-didnt-know-about-the-flu

3. Elert, E. 2013. FYI: Why is There a Winter Flu Season? Popular Science. <http://www.popsci.com/science/article/2013-01/fyi-why-winter-flu-season> [2 November, 2014]

4. https://www.nih.gov/news-events/nih-research-matters/flu-virus-fortified-colder-weather

5. http://sitn.hms.harvard.edu/flash/2014/the-reason-for-the-season-why-flu-strikes-in-winter/

6. https://medicalfuturist.com/ten-ways-technology-changing-healthcare/?utm_source=The%20Medical%20Futurist%20Newsletter&utm_campaign=ee5854702c-EMAIL_CAMPAIGN_2019_10_29_diabetes_companies_COPY_&utm_medium=email&utm_term=0_efd6a3cd08-ee5854702c-420575081

7. https://www.onsemi.com/pub/Collateral/EVBUM2614-D.PDF

8. https://www.onsemi.com/products/connectivity/wireless-rf-transceivers/rsl10

9. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0206808

10. https://weather.com/health/cold-flu/news/2020-02-14-worst-flu-season-for-children-in-a-decade
