# Weather-App

## Overview
I built a React weather app within 5 days using the OpenWeatherMap API. Essentially, this is a weather application which allows the user to search for cities around the world and view the weekly weather forecasts for that location. There is an additional feature that I implemented that allows the user to switch between imperial and metric values. I set about building a visually interesting and intuitive web app to utilize the data available from the api.

<div align="center">
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640124/Screenshot_2021-10-13_at_19.28.11_t59r84.png" width="750px" height="650px"/>
  
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640129/Screenshot_2021-10-13_at_19.29.26_rparp9.png" width="750px" height="650px"/>
</div>

## Brief
Use an external API to create a React app with multiple components. This app should be created using JavaScript, React and HTML/CSS for styling.

## Deployment 
<a href="https://react-weather-app-5.netlify.app/">Weather App</a>

## Timeframe
5 days

## Technologies
* HTML
* CSS
* BootStrap
* JavaScript
* React
* Node.js
* Axios

## Installation
* Install Node.js. 
* Create an empty folder.
* Open empty with VS Code.
* Open Terminal.
* Run `yarn install`.
* Run `npx create-react-app .`.
* Type `yarn start`.

## Plan
I wanted to create an informative app with a minimalistic look to the design and clear UI. I began with drawing a wireframe on Figma of how I wanted it to look. I then chose a colour palette of cloudy blue/ white with hints of yellow. After that, I moved onto creating a Trello board to organise the work into seperate tickets and to keep on track of everything being done.

<div align="center">
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640130/Screenshot_2021-10-13_at_19.10.26_z0x7cq.png" width="700px" height="550px"/>

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640134/Screenshot_2021-10-13_at_19.26.52_s2qbxj.png" width="700px" height="650px"/>
</div>

## Approach
I began by creating a main top level weather component and adding in jsx to skeleton out the app. Secondly, I developed an input section where the user is able to search for cities and find weather information. Using the OpenWeatherMap API I was able to display the required information for each city using the useState hook. I created a separate component to display the information by passing the data through to the ‘WeatherInfo’ component. This allowed me to display info such as description, wind, humidity etc. 
<div>
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640136/Screenshot_2021-10-15_at_16.20.50_m72vnp.png" width="650px"/>

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640140/Screenshot_2021-10-15_at_16.21.15_xmmseo.png" width="500px"/>
</div>

Moving on to the temperature conversion, this was calculated using a simple formula to convert metric to imperial. I also did this in its own component to make sure not to over crowd any components. Passing through the celsius temperature and using an if statement to switch from the two units.
<div>
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640145/Screenshot_2021-10-15_at_16.29.17_c24nc7.png" width="450px"/>
</div>

When working on the weekly forecast, the API url changes and uses longitude and latitude values, therefore from the weather component I had to add to the useState of setWeatherData and include coordinates. Thus allowing me to pass through the coordinates to the Forecast component. From this, I would be able to find the daily temperatures and I would have to map through all 5 days in order to display all of them efficiently.  Creating another component ‘ForecastDay’ to be mapped out, so it is neater.
<div>
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640149/Screenshot_2021-10-15_at_16.36.32_ucdphq.png" width="700px"/>
</div>

Also, in this project I had to always format the date or time accordingly as the data displayed it in Javascript UTC. To do this, I would have to convert the day by multiplying it by 1000 and then allowing it to filter through the array of days.
<div>
<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640152/Screenshot_2021-10-15_at_16.40.10_mm5f5m.png" width="500px"/>

<img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1634640156/Screenshot_2021-10-15_at_16.44.01_doemgx.png" width="650px"/>
</div>

## Wins 
* Solidifying my knowledge in React and structuring the code into components.
* Working with an API and dealing with the data returned.
* Creating an aesthetically pleasing and responsive app. It was important that the site would be functional and look good when displayed on any device.

## Challenges
* When reading the API documentation I noticed I needed to pass in the longitude and latitude of the location in order to get the weekly forecast to display as well as our API authentication key. 

## Bugs
* A bug I encountered during this project was the forecast did not want to display when searching a new city, which meant the page needed to reload using useEffect in order for the forecast to reload when a city is searched and display the information.

## Future Improvements
* Add a button for the user to view the weather in their current location rather than searching a city.
* I also want to be able to add cities at the top of the app e.g. London, New York, Tokyo, for the user to be able to select that city quickly rather than searching it.
