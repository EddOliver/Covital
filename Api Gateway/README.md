# Api Gateway Setup:

In this section I will show how is the configuration process of our api gateway.

<img src="https://i.ibb.co/D749zy3/APIDiagram.png" width="1000">

# API Creation:

We first looked for the API Gateway service and created the resource.

<img src="https://i.ibb.co/jyQCNK0/image.png" width="1000">

For our application we decided to create an API gateway based on Cloud Functions, because we had to integrate the Cloud Object Storage service and preprocessing in Python.

<img src="https://i.ibb.co/rytWDmC/image.png" width="1000">

I recommend reviewing all these menus a little so that you become familiar with them, however as the first task we are going to create the actions that our API will execute.

<img src="https://i.ibb.co/vxG6yKm/image.png" width="1000">

In this case the process to create the 4 Actions will be the same, so we press the "Create" button

<img src="https://i.ibb.co/RQNF1pg/image.png" width="1000">

Since we will not use "Actions" with any additional python or nodejs packages, we will simply press the "Create Action" button

<img src="https://i.ibb.co/K5WGQ8y/image.png" width="1000">

In each of the Actions we will put the corresponding name to each action and we will select the Runtime that we require in our case we use Python and NodeJS.

<img src="https://i.ibb.co/Y34p7nW/image.png" width="1000">

The actions we created were as follows:

- carousel - (NodeJS) - Provides the information of the carousels of our website.
- mexinfo - (Python) - Provides the information of confirmed patents of Covid-19 in Mexico to be exposed on the website, API of the Mexican Secretary of Health.
- twitter-cos - (Python) - Gets the file with the emotional polarity information stored in Cloud Object Storage, open it, decode it and send it as a response to the web page to display the emotional polarity map.
- news - (Python) - Send the list of tweets to be displayed on the website.

NOTE: for the twitter-cos action we must put our own COS credentials, this process is explained in detail in the README of the Twitter - Watson folder.
- https://github.com/EddOliver/Covital/blob/master/Twitter%20-%20Watson/README.md

For each Action, we will paste the corresponding code and click Save.

<img src="https://i.ibb.co/27C5c5z/image.png" width="1000">

Now we go to the API section to create our API.

<img src="https://i.ibb.co/TkC41Gq/image.png" width="1000">

First we are going to name our API and add the actions with the Create Operation button.

<img src="https://i.ibb.co/Jnc5sWJ/image.png" width="1000">

As an example I will configure the news action.

<img src="https://i.ibb.co/XDnHCVS/image.png" width="1000">

For more security of the Api we add an Api Key.

<img src="https://i.ibb.co/jhX1zws/image.png" width="1000">

Everything else we leave as it is and select the button in the background that says Create (by default CORS is activated, leave it like this to be able to call the Api from your website).

<img src="https://i.ibb.co/XJ3hW6S/image.png" width="1000">

Once this is done we will enter the Api and the API Explorer option.

Note: the apikey to call the API is in the button that says Sharing and Keys

<img src="https://i.ibb.co/8mgJT5S/image.png" width="1000">

We can see within this menu a section of code to prove that our API works.

<img src="https://i.ibb.co/GQjkfGY/image.png" width="1000">

In my case I did the test of my API in the Postman program and here a screenshot of how it is working.

<img src="https://i.ibb.co/Lv0197s/image.png" width="1000">

All calls from these APIs to the website were made with the request module for ReactJS.

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

