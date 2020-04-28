# Twitter - Watson

## COS Creation and Credentials:

Create a Cloud Object Storage resource, you can use the one we created previously for the website or use a totally independent one, what we will save will be a json file with the analysis of twitter's polarity.

<img src="https://i.ibb.co/b2GpF7N/image.png" width="1000">

In our case we use a separate COS to store those values.

<img src="https://i.ibb.co/bgWj64s/image.png" width="1000">

Now we have to obtain some credentials to be able to store our data from watson studio in our COS and also to be able to open them from our API. So within our COS we create a new access credential as shown in the image.

<img src="https://i.ibb.co/s3Z7QfN/image.png" width="1000">

The configuration of this credential will be as follows:

<img src="https://i.ibb.co/BNwwhvr/image.png" width="1000">

The credential has this structure:

    {
      "apikey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "endpoints": "https://control.cloud-object-storage.cloud.ibm.com/v2/endpoints",
      "iam_apikey_description": "Auto-generated for key XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
      "iam_apikey_name": "Covital-Credential1",
      "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
      "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/XXXXXXXXXXXXXXXXXXXXXXXXXXXx::serviceid:ServiceId-XXXXXXXXXXXXXXXXXXXX",
      "resource_instance_id": "crn:v1:bluemix:public:cloud-object-storage:global:a/XXXXXXXXXXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX::"
    }

The data we need are the following:

"apikey": **"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"**

"endpoints": **"https://control.cloud-object-storage.cloud.ibm.com/v2/endpoints"**
  
"resource_instance_id":**"crn:v1:bluemix:public:cloud-object-storage:global:a/XXXXXXXXXX:XXXXXXXXXXXXXXXXXXXXXXXXXXX::"**

We will do this process two times to have the Watson Studio credential and that of the Action twitter-cos of the Api gateway.


## Twitter Developer API:

To obtain an API key to use Twitter resources, we must first apply to a twitter developer account at the following link:

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

After creating the account in the Apps section, we can create an App which provides us with the necessary credentials to access the twitter API:

<img src="https://i.ibb.co/4SVRpLH/image.png" width="1000">

Inside the app we will be able to see the 4 credentials that we need to make our watson studio code work.

<img src="https://i.ibb.co/c1njSv6/image.png" width="1000">

## Tone Analyzer API:

Create the Tone Analyzer resource.

<img src="https://i.ibb.co/c1njSv6/image.png" width="1000">

Immediately after entering the resource we will have the credentials that we will need and use.

<img src="https://i.ibb.co/BzBcnq7/image.png" width="1000">

Note: the next step is optional, because Tone Analyzer only works for texts that are written in French or English, because tweets in Mexico are written in Spanish, we will have to use some API that allows us to translate into English, If you do not need to translate the text into English, go to the next point, in our case we use the following.

## Optional: Translate API:

To translate the tweets into English, we use a free translation API called yandex Translate API.

https://tech.yandex.com/translate/

https://i.ibb.co/JpJp5CJ/image.png

## Watson Studio, creation and Setup:

We create a Watson Studio resource from the catalog.

<img src="https://i.ibb.co/fDFNX89/image.png" width="1000">

We enter the interface of Watson Studio

<img src="https://i.ibb.co/TYwbLWK/image.png" width="1000">

Create a new watson studio project as shown in the image.

<img src="https://i.ibb.co/fdzMdgL/image.png" width="1000">

Press Create and empty project

<img src="https://i.ibb.co/vkn1GH4/image.png" width="1000">

We write a name, a description and press Create.

<img src="https://i.ibb.co/nw7t2TG/image.png" width="1000">

Press "Add to project"

<img src="https://i.ibb.co/F5qmqw2/image.png" width="1000">

Select the "Notebook option"

<img src="https://i.ibb.co/PCy8hQ8/image.png" width="1000">

We upload the code.ipynb file of this in the "WatsonCode" folder:

<img src="https://i.ibb.co/gmGT0my/image.png" width="1000">

Once you open the code in Watson Studio replace your COS credentials in the first part of the code.

<img src="https://i.ibb.co/prcPT7p/image.png" width="1000">

Run the code once to display the buckets you have available.

<img src="https://i.ibb.co/YNQsjCK/image.png" width="1000">

Now we put our credentials in the next part of the code.

<img src="https://i.ibb.co/nQKK5g7/image.png" width="1000">

The tweets will appear with a 1 at the end if it is positive and a 0 if it is negative, in turn every 100 tweets we will make a copy of the file in our COS.


<img src="https://i.ibb.co/377Xb3x/image.png" width="1000">

The code executes the following:

<img src="https://i.ibb.co/H2jRpx9/Untitled-Diagram-1.png" width="1000">
