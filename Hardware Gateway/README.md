# Hardware Gateway:

Para nuestro dispositivo de cuidado de personal de salud IoT utilizamos una smart watch MiBand3 de Xiaomi para revisar el pulso y los pasos recorridos, utilizamos una Raspberry Pi Zero W como gateway para mandar los datos a IBM Internet of Things Platform

<img src="https://i.ibb.co/HzGH5Yt/Diagrqmiot.png" width="1000">

## Configure the Raspberry Pi Zero:

Download the operating system of the Raspberry Pi Zero.

- To download the operating system of the Raspberry enter the following link:
- Link: http://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2019-04-09/2019-04-08-raspbian-stretch-lite.zip
- Download this version.

3.2. Flash the operating system in the SD.

Software: https://www.balena.io/etcher/

- Through Etcher flash the raspberry operating system but DO NOT put it inside the raspberry yet.

3.3. Create a wpa_supplicant for the connection of the raspberry to the internet.

- Since we have flashed the operating system, we copy and paste the files from the "RaspberryPi" folder directly into the SD card.
- Then we open the "wpa_supplicant.conf" file with a text editor
- In between the quotes in the ssid line write your wifi network and in psk the network key.

        country = us
        update_config = 1
        ctrl_interface =/var/run/wpa_supplicant

        network =
        {
        scan_ssid = 1
        ssid = "yourwifi"
        psk = "yourpassword"
        }


- We save the changes and remove the SD from the PC.

3.4. We then place the SD in the raspberry and connect it to its power source.

- The power source of a Raspberry Pi Zero is recommended to be from 5 volts to 1A minimum. We recommend the official ower supply for the Raspberry pi.

3.5. Once the Raspberry has already started, we need to access it through SSH or with a keyboard and a monitor.

- If you want to access it through SSH we need your IP.
- In order to analyze your network and obtain the number we will have to use one of the following programs.
- Advanced IP Scanner (Windows) or Angry IP Scanner program (Windows, Mac and Linux).
- In the following image you can see how we got the Raspberry IP.

<img src="https://i.ibb.co/KLThvst/AngryIP.png"> 

3.6. Copy the program inside the "RaspberrySoft" folder using FileZilla to the raspberry.

- To pass the file via wifi to the raspberry we have to download another program called "FileZilla".
- Link: https://filezilla-project.org/download.php?type=client
- Once we have the program, we open it and input the following data in the upper bar to access the raspberry.

Host: RASPBERRYIP              Username:pi           Password:raspberry             port:22

<img src="https://i.ibb.co/4Y80V96/filezilla.png"> 

- Press Quickconnect.
- Once we enter the Raspberry, we copy the file "exe.py" in the folder "/home/pi".

3.7. Since we have the file in the raspberry, now we have to connect the raspberry with ssh.

- To connect using ssh to the raspberry we need the Putty program.
- Link: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
- This program will let us access the command console of the raspberry.
- In Linux, just open the terminal and put the following command.

        ssh pi@RASPBERRYIP

<img src="https://i.ibb.co/PxP86Xz/terminal.png">

- Password: “raspberry”

<img src="https://i.ibb.co/NthRqRc/terminal2.png">

3.8. First, we will install the necessary libraries for our program to work.

- For it to work we just have to input the following command.

      sudo apt-get update && sudo apt-get install -y python-pip && pip install pyserial paho-mqtt

- This command will install the pyserial and paho-mqtt libraries

3.9. Once the console is open, we will edit the file used in the previous paragraph to configure the IP of the Ultra96.

- In the Raspberry's terminal we will write the following command.
     
    sudo nano exe.py

<img src="https://i.ibb.co/JCpSFDJ/terminalcomand.png">

- The command will open the text editor where we can go through the file "exe.py".
- We go down to the part shown in the image and instead of the text "ULTRA96IP" we will input the IP that we obtained in subsection 1.9.

<img src="https://i.ibb.co/gwmdqyZ/Putty.png">

- Since we changed that text, we will save the changes made by pressing "ctrl + o" and enter, and to exit the editor pressing "ctrl + c".

3.10. Input boot program for the Raspberry Zero.
In order for the program to start together with raspbian, and for us to no longer need to execute it, we will write the following command.

    sudo nano /etc/rc.local

<img src="https://i.ibb.co/t46LWqc/start.png">

- Inside the file we will have to write the following:

      sudo python /home/pi/exe.py
      
<img src="https://i.ibb.co/177pdcd/start2.png">

- After adding that text, we will save the changes made by pressing "ctrl + o" and enter, to exit the editor press "ctrl + c".

COVID19 information aggregator and data platform for Mexico, includes IoT risk assessing devices.

<img src="https://i.ibb.co/NW6Rmrk/desklogo.png" width="1000">

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

# Solution and What it does

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




