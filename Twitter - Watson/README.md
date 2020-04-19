# Twitter - Watson

## COS Creation and Credentials:

Tener ya un recurso creado de Cloud Object Storage, puedes utilizar el que creamos anteriormente para la pagina web o utilizar uno totalmente independiente, lo que guardaremos sera un archivo json con el análisis de la polaridad de twitter. 

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

## Watson Studio, creation and Setup:

