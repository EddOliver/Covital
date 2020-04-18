# Hardware Gateway:

Para nuestro dispositivo de cuidado de personal de salud IoT utilizamos una smart watch MiBand3 de Xiaomi para revisar el pulso y los pasos recorridos, utilizamos una Raspberry Pi Zero W como gateway para mandar los datos a IBM Internet of Things Platform

<img src="https://i.ibb.co/YXrZxyB/image.png" width="1000">

## Configure your IBM Watson IoT Platform:

### Configure your device:

En nuestra plataforma de IBM Cloud creamos el siguiente recurso:

<img src="https://i.ibb.co/SmvQ7rf/image.png" width="1000">

Dentro de este recurso crearemos un nuevo device en el botón mostrado a continuación:

<img src="https://i.ibb.co/NL3WZbX/image.png" width="1000">

Para este ejemplo solo necesitamos que guardes el "Device Type" y el "Device ID".

<img src="https://i.ibb.co/PzQ2KCZ/image.png" width="1000">

Termina de crear el device presionando el boton de Next y Finish (No te preocupes por las credenciales del device, para este ejemplo no las vamos a utilizar).

### Configure you App (Raspberry) Credential:

Tenemos que crear una credencial de aplicacion, para ello nos vamos al siguiente de Apps y presionamos el siguiente boton:

<img src="https://i.ibb.co/gR9Rf36/image.png" width="1000">

Crea la app poniendo una descripcion en ella y presionando "Next":

<img src="https://i.ibb.co/hWKhgQg/image.png" width="1000">

Para evitar problemas de compatibilidad la configuraremos como se muestra a continuacion:

<img src="https://i.ibb.co/Mn4w6TK/image.png" width="1000">

Guarda los siguientes 3 valores para configurar correctamente la gateway:

<img src="https://i.ibb.co/JBKsKYc/image.png" width="1000">

## Configure the Raspberry Pi Zero:

Download the operating system of the Raspberry Pi Zero.

- To download the operating system of the Raspberry enter the following link:
- Link: http://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2019-04-09/2019-04-08-raspbian-stretch-lite.zip
- Download this version.

Flash the operating system in the SD.

Software: https://www.balena.io/etcher/

- Through Etcher flash the raspberry operating system but DO NOT put it inside the raspberry yet.

Create a wpa_supplicant for the connection of the raspberry to the internet.

- Since you have flashed the operating system, copy and paste the files from the "RaspberryPi" folder directly into the SD card.
- Then open the "wpa_supplicant.conf" file with a text editor
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

We then place the SD in the raspberry and connect it to its power source.

- The power source of a Raspberry Pi Zero is recommended to be from 5 volts to 1A minimum. We recommend the official ower supply for the Raspberry pi.

Once the Raspberry has already started, we need to access it through SSH or with a keyboard and a monitor.

- If you want to access it through SSH we need your IP.
- In order to analyze your network and obtain the number we will have to use one of the following programs.
- Advanced IP Scanner (Windows) or Angry IP Scanner program (Windows, Mac and Linux).
- In the following image you can see how we got the Raspberry IP.

<img src="https://i.ibb.co/q9BM6dP/image.png"> 

Connect the raspberry with ssh.

- To connect using ssh to the raspberry we need the Putty program.
- Link: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
- This program will let us access the command console of the raspberry.
- In Linux, just open the terminal and put the following command.

        ssh pi@RASPBERRYIP

<img src="https://i.ibb.co/PxP86Xz/terminal.png">

- Password: “raspberry”

<img src="https://i.ibb.co/QpWj18S/image.png">

First, we will install the necessary libraries for our program to work.

- For it to work we just have to input the following command.

      sudo apt-get python3-pip git -y
      pip3 install bluepy Crypto crc16 paho-mqtt

- Ahora descarga la carpeta con nuestro programa.

       git clone https://github.com/EddOliver/Covital

- Entramos a la carpeta Covital/RpiScript

      cd Covital/RpiScript

- Tendremos que configurar las credenciales de IBM IoT Platform en nuestro programa main.py, asi que abrimos el editor de la Rpi Zero con el siguiente comando.

      sudo nano main.py

- Cambia los siguientes valores pos los tuyos en el inicio del codigo:

      ORG = "XXXXXX"                   # YOUR ORG ID      
      myauth="X-XXXXXX-XXXXXXXXXX"     # API key 
      mysecret="XXXXXXXXXXXXXXXXX"     # Authentication Token
      mydevice="YourDeviceName"        # Your Device Name
      mydeviceid="YourDeviceId"        # Your Device ID

- Para guardar los cambios en el editor presiona el comando "ctrl+o", Enter y luego "ctrl+x", enter

- el siguiente paso es buscar la dirección MAC de nuestra MiBand3 con el siguiente comando, guardala.

      sudo hcitool lescan

<img src="https://i.ibb.co/1MfbWmZ/image.png" width="1000">

- Para activar el codigo ejectuta el siguiente comando:

      sudo python3 main.py YOURMAC

- Si todo funciona correctamente veras lo siguiente:

<img src="https://i.ibb.co/cNjC3ry/image.png" width="1000">

- Una vez tenemos todo conectado, vamos a probar que todo este funcionando correctamente mandando algunos comandos.

- <img src="https://i.ibb.co/jbmNXJd/ezgif-com-video-to-gif.gif" width="1000">

## NodeRed Configuration:

TU CULO.......digo tu parte XP

