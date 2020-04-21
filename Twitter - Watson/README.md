# Twitter - Watson

## COS Creation and Credentials:

Crea un recurso de Cloud Object Storage, puedes utilizar el que creamos anteriormente para la pagina web o utilizar uno totalmente independiente, lo que guardaremos sera un archivo json con el análisis de la polaridad de twitter. 

<img src="https://i.ibb.co/b2GpF7N/image.png" width="1000">

En nuestro caso utilizamos una COS independiente para guardar esos valores.

<img src="https://i.ibb.co/bgWj64s/image.png" width="1000">

Ahora tenemos que obtener unas credenciales para poder almacenar nuestros datos desde watson studio en nuestro COS y también poder abrirlos desde nuestra API. Asi que dentro de nuestro COS creamos una nueva credencial de acceso como se muestra en la imagen.

<img src="https://i.ibb.co/s3Z7QfN/image.png" width="1000">

La configuración de esta credencial sera la siguiente:

<img src="https://i.ibb.co/BNwwhvr/image.png" width="1000">

La credencial tiene esta estructura:

    {
      "apikey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "endpoints": "https://control.cloud-object-storage.cloud.ibm.com/v2/endpoints",
      "iam_apikey_description": "Auto-generated for key XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
      "iam_apikey_name": "Covital-Credential1",
      "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
      "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/XXXXXXXXXXXXXXXXXXXXXXXXXXXx::serviceid:ServiceId-XXXXXXXXXXXXXXXXXXXX",
      "resource_instance_id": "crn:v1:bluemix:public:cloud-object-storage:global:a/XXXXXXXXXXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX::"
    }

Los datos que necesitamos son los siguientes:

"apikey": **"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"**

"endpoints": **"https://control.cloud-object-storage.cloud.ibm.com/v2/endpoints"**
  
"resource_instance_id":**"crn:v1:bluemix:public:cloud-object-storage:global:a/XXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXX::"**

Este proceso lo haremos 2 veces para tener la credencial de Watson Studio y la de la Action **twitter-cos** de la Api gateway.

## Twitter Developer API:

Para obtener una API key para utilizar los recursos de Twitter, deberemos primero aplicar a una cuenta de twitter developer en el siguiente enlace:

https://developer.twitter.com/en/apply-for-access

Select your Primary reason for using Twitter Developer Tools. For auto post to Twitter select Build customized solutions in-house

<img src="https://dpd7q0cxjbvq3.cloudfront.net/images/autotweet-documentation/twitter/twitterdev/twitterdev-tutorial-09.png" width="1000">

Verify the Twitter Username details associated to the developer account.

<img src="https://dpd7q0cxjbvq3.cloudfront.net/images/autotweet-documentation/twitter/twitterdev/twitterdev-tutorial-10.png" width="1000">

Fill all the data required about your organization and your project.

<img src="https://dpd7q0cxjbvq3.cloudfront.net/images/autotweet-documentation/twitter/twitterdev/twitterdev-tutorial-11.png" width="1000">

Check your information

<img src="https://dpd7q0cxjbvq3.cloudfront.net/images/autotweet-documentation/twitter/twitterdev/twitterdev-tutorial-15.png" width="1000">

Accept the Developer Agreement and verify your email account.

<img src="https://dpd7q0cxjbvq3.cloudfront.net/images/autotweet-documentation/twitter/twitterdev/twitterdev-tutorial-16.png" width="1000">

Your application is under review, and you will receive a notification with the result.

<img src="https://dpd7q0cxjbvq3.cloudfront.net/images/autotweet-documentation/twitter/twitterdev/twitterdev-tutorial-17.png" width="1000">

Despues de haber creado la cuenta en la seccion de Apps, podemos crear una App la cual nos provea las credenciales necesarias para acceder a la API de twitter:

<img src="https://i.ibb.co/4SVRpLH/image.png" width="1000">

Dentro de la app podremos ver las 4 credenciales que necesitamos para que funcione nuestro codigo de watson studio.

<img src="https://i.ibb.co/c1njSv6/image.png" width="1000">

## Tone Analyzer API:

Creamos el recurso de Tone Analyzer.

<img src="https://i.ibb.co/c1njSv6/image.png" width="1000">

Inmediatamente entrando al recurso tendremos las credenciales que usaremos.

<img src="https://i.ibb.co/BzBcnq7/image.png" width="1000">

Nota: el siguiente paso es opcional, debido a que Tone Analyzer solo funciona para textos que estén escritos en frances o ingles, debido a que los tweets en mexico están escritos en español tendremos que usar alguna API que nos permita realizar un translate al ingles, si no requieres traducir el texto al ingles pasa al siguiente punto, en nuestro caso usamos lo siguiente.

## Optional: Translate API:

Para realizar el Translate de los tweets al ingles, utilizamos una API de traduccion gratuita llamada Translate API de yandex.

https://tech.yandex.com/translate/

https://i.ibb.co/JpJp5CJ/image.png

## Watson Studio, creation and Setup:

Creamos un recurso de Watson Studio desde el catalogo.

<img src="https://i.ibb.co/fDFNX89/image.png" width="1000">

Entramos a la interfaz de Watson Studio

<img src="https://i.ibb.co/TYwbLWK/image.png" width="1000">

Creamos un nuevo proyecto de watson studio como se muestra en la imagen.

<img src="https://i.ibb.co/fdzMdgL/image.png" width="1000">

Presionamos Create and empty project

<img src="https://i.ibb.co/vkn1GH4/image.png" width="1000">

Escribimos un nombre, una descripción y presionamos Create.

<img src="https://i.ibb.co/nw7t2TG/image.png" width="1000">

Presionamos el boton "Add to project"

<img src="https://i.ibb.co/F5qmqw2/image.png" width="1000">

Seleccionamos la opción de "Notebook"

<img src="https://i.ibb.co/PCy8hQ8/image.png" width="1000">

Subimos el archivo code.ipynb de esta en la carpeta "WatsonCode":

<img src="https://i.ibb.co/gmGT0my/image.png" width="1000">

Una vez abras el código en Watson Studio sustituye tus credenciales de COS en la primera parte del código.

<img src="https://i.ibb.co/prcPT7p/image.png" width="1000">

Ejecuta el código una vez para mostrar los Buckets que tengas disponibles.

<img src="https://i.ibb.co/YNQsjCK/image.png" width="1000">

Ahora ponemos nuestras credenciales en el la siguiente parte del código.

<img src="https://i.ibb.co/nQKK5g7/image.png" width="1000">

Los tweets apareceran con un 1 al final si es positivo y un 0 si es negativo, a su vez cada 100 tweets realizaremos una copia del archivo en nuestro COS.

<img src="https://i.ibb.co/377Xb3x/image.png" width="1000">

El codigo ejecuta lo siguiente:

<img src="https://i.ibb.co/H2jRpx9/Untitled-Diagram-1.png" width="1000">