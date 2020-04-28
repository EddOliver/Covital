# Hardware Gateway:

For our IoT health care device we use a Xiaomi MiBand3 smart watch to check the pulse and the steps taken, we use a Raspberry Pi Zero W as a gateway to send the data to the IBM Internet of Things Platform

<img src="https://i.ibb.co/YXrZxyB/image.png" width="1000">

## Configure your IBM Watson IoT Platform:

### Configure your device:

On our IBM Cloud platform we create the following resource:

<img src="https://i.ibb.co/SmvQ7rf/image.png" width="1000">

Within this resource we will create a new device in the button shown below:

<img src="https://i.ibb.co/NL3WZbX/image.png" width="1000">

For this example we just need to save the "Device Type" and the "Device ID".

<img src="https://i.ibb.co/PzQ2KCZ/image.png" width="1000">

Finish creating the device by pressing the Next and Finish button (Do not worry about the device credentials, for this example we will not use them).

### Configure your App (Raspberry) Credential:

We have to create an application credential, for this we go to the next one of Apps and press the following button:

<img src="https://i.ibb.co/gR9Rf36/image.png" width="1000">

Create the app by putting a description in it and pressing "Next":

<img src="https://i.ibb.co/hWKhgQg/image.png" width="1000">

To avoid compatibility problems, we will configure it as shown below:

<img src="https://i.ibb.co/Mn4w6TK/image.png" width="1000">

Save the following 3 values to correctly configure the gateway:

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

      sudo apt-get update
      sudo apt-get install python3-pip libglib2.0-dev git -y
      sudo pip3 install bluepy Crypto crc16 paho-mqtt

- Download the folder with our program

       git clone https://github.com/EddOliver/Covital

- Enter the Covital/RpiScript folder.

      cd Covital/RpiScript

- We will have to configure the IBM IoT Platform credentials in our main.py program, so we open the editor of the Rpi Zero with the following command.

      sudo nano main.py

- Change the following values ​​for yours at the beginning of the code:

      ORG = "XXXXXX"                   # YOUR ORG ID      
      myauth="X-XXXXXX-XXXXXXXXXX"     # API key 
      mysecret="XXXXXXXXXXXXXXXXX"     # Authentication Token
      mydevice="YourDeviceName"        # Your Device Name
      mydeviceid="YourDeviceId"        # Your Device ID

- To save the changes in the editor press the command "ctrl + o", Enter and then "ctrl + x", enter

- The next step is to find the MAC address of our MiBand3 with the following command, save it.

      sudo hcitool lescan

<img src="https://i.ibb.co/1MfbWmZ/image.png" width="1000">

- To activate the code, execute the following command:

      sudo python3 main.py YOURMAC

- If everything works correctly you will see the following:

<img src="https://i.ibb.co/cNjC3ry/image.png" width="1000">

- Once we have everything connected, we are going to test that everything is working correctly by sending some commands.

<img src="https://i.ibb.co/3NV8jcw/ezgif-com-video-to-gif-2.gif" width="1000">



