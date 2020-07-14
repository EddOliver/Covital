[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [<img src="https://img.shields.io/badge/View-Website-blue">](https://main.covital.com.mx/english) [<img src="https://img.shields.io/badge/View-Video-red">](https://youtu.be/ZrKRTGuA2X4)

<img src="https://i.ibb.co/ZzmpyX1/COVITAL.png" width="600">

### Contact Tracing platform with patient centric risk-assessing IoT devices.

#### Webpage: https://main.covital.com.mx/english
#### IoT Platform: https://iot.covital.com.mx/
#### Video: https://youtu.be/ZrKRTGuA2X4
## 16,351 views in 2 weeks!

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

[<img src="https://img.shields.io/badge/Victor%20Alonso-Altamirano%20Izquierdo-lightgrey">](https://www.linkedin.com/in/alejandro-s%C3%A1nchez-guti%C3%A9rrez-11105a157/)

[<img src="https://img.shields.io/badge/Alejandro-Sanchez%20Gutierrez-red">](https://www.linkedin.com/in/victor-alonso-altamirano-izquierdo-311437137/)


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

There have been many pandemics throughout history, in recent years perhaps the ones we can remember the most were diseases such as swine flu AH1N1 (2009), SARS (2002), Ebola (2014), MERS (coronavirus, 2015) and now the Covid-19.

However, we never had to live in a state of global quarantine, we never thought that the installation of the disease in the world would be so fast. Currently, there are countries that have even generated policies for the use of firearms against people who do not quarantine, in many others only isolation and social distancing are promoted, as in Mexico.

However, despite the constant requests from Hugo López-Gatell Ramírez, assistant secretary of Prevention and Health Promotion, to stay home and not leave, they have not been enough to prevent the accelerated growth of Covid-19 cases in Mexico.

<img src="https://i.ibb.co/Qm6Xxcx/stay.png" width="1000">

In social networks we can find cases such as these:

- People manually making face masks without knowing their effectiveness:
<img src="https://i.ibb.co/H74qCGp/download-1.jpg" width="1000">

- People who despite the quarantine will buy their fish from the market (alarmingly, since the start of the pandemic, this market in Mexico has had an increase in customers):
<img src="https://i.ibb.co/jZrcRSW/Mercado-de-La-Viga-1.jpg" width="1000">

- People Massively buying toilet paper:
<img src="https://i.ibb.co/P1R0rdn/skynews-covid-19-coronavirus-4952333.jpg" width="1000">

- And of course, people carrying out massive looting of supermarkets from food to appliances:
<img src="https://i.ibb.co/XS6z0F5/unnamed.jpg" width="1000">

From this moment it was clear that one of the main problems of Mexico regarding the coronavirus was the lack of information.

To confirm our theory, we decided to carry out a survey of (insert number of people from the survey) where we found that the (insert percentage) mentions that it is suffering from strong disinformation about the coronavirus and how to avoid it, in addition to this, that they did not know where to find reliable sources of information, therefore we conclude the following:

- People do not know where to directly consult real information on prevention.
- People share a lot of false information on social networks, generally political conspiracies.
- Most people do not have a real source of Covid-19 statistical data, mostly consulting various sources to get the data or directly waiting daily for television newscasts to hear them.

<img src="https://i.ibb.co/r4ZRknx/image.png" width="300">

The conclusion is that Mexico needs a platform that integrates all the aforementioned points, generating a platform not only for data, but also for important prevention information, symptoms, what to do if you get sick, etc.

Apart from that there's the problem of overworked Medical professionals as they are the population that will be most at risk and we need them. (1)

# Solution 

We created a platform that has 5 main functions:

- Show a heat map where we can visually and quantitatively observe the positive cases of COVID-19 in Mexico by each state.

<img src="https://i.ibb.co/v1h6sMK/image.png" width="1000">

- Provide relevant information for people such as:
   - Correct hand washing
   - Mouthguards: Types and correct use
   - Phases and preventive measures in a pandemic
   - Symptoms of Covid-19
   - What to do if symptoms are suspected.
   - And offer Official sources to consult quality information.
  
  <img src="https://i.ibb.co/zfNVNzV/image.png" width="1000">
  
- Quantitative sensing of the positivity of the country in general by means of the analysis in real time of tweets throughout the country.

  <img src="https://i.ibb.co/FbMqYRC/tweet-anal.png" width="1000">

- News section with the latest "true" or real news

  <img src="https://i.ibb.co/Kyk5kYw/image.png" width="1000">

- Fake news section where we can show people what is true and what is not.

  <img src="https://i.ibb.co/q54zLVg/image.png" width="1000">

# How we built it

#### We have step by step instructions for everything created:

[API Gateway](https://github.com/EddOliver/Covital/tree/master/Api%20Gateway)

[Cloud Foundry app](https://github.com/EddOliver/Covital/tree/master/Cloud%20Foundry%20App)

[Hardware Gateway](https://github.com/EddOliver/Covital/tree/master/Hardware%20Gateway)

[Twitter sentiment analysis](https://github.com/EddOliver/Covital/tree/master/Twitter%20-%20Watson)

[3D printed parts](https://github.com/EddOliver/Covital/tree/master/3D%20printed%20parts)

[Node RED for the Clothing embedded device](https://github.com/EddOliver/Covital/tree/master/Node%20RED%20flow)

<img src="https://i.ibb.co/Pr7gPcc/Diagrama.png" width="1000">

# Toolchain and Cloudfoundry app:

Within the IBM console we created a Toolchain which would allow us to deploy a cloudfoundry app within the ibm cloud and in turn would allow us to control versions using git.

<img src="https://i.ibb.co/FxDDN1Y/image.png" width="1000">

All the development of the page was carried out using the Reactjs framework and was updated via command line git to IBM.

<img src="https://i.ibb.co/qJSnQH5/image.png" width="1000">

# API Gateway:

All the integration of services of the web page was done through the API gateway services for requesting data from the page.

<img src="https://i.ibb.co/PNYqnWB/image.png" width="1000">

Each of the api requests is associated with an action programmed in NodeJs or Python. The API call is protected by an X-IBM-Client-Id key.

API Paths:
<img src="https://i.ibb.co/9b4Lgqv/image.png" width="1000">
API Mexico data request and processing:
<img src="https://i.ibb.co/3kghvsP/image.png" width="1000">

- /car : Webpage Carousel Data
- /news : Last Covid-19 tweets
- /mex : Last COVID-19 data in mexico.
- /twitter-cos : Last polarity data for display.

# Cloud Object Storage:

All documents on the page such as images, icons, etc ... They were stored in a COS bucket configured to have data public files.

<img src="https://i.ibb.co/5nL7C82/image.png" width="1000">

# Twitter Analysis:

To make the tweeter analysis, the Tweepy library was used to capture all the Twweets in real time from Mexico and analyze them one by one with the Tone Analyzer service.

Note: The Tone Analyzer service works with English text, so we use a Spanish to English text translation api as a process.

<img src="https://i.ibb.co/hMmczNx/image.png" width="1000">

This service is running in periods of time on Watson Studio in a Jupyter Notebook, each time 100 tweets are analyzed, the algorithm updates the json file with COS saved levels of positivity.

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
