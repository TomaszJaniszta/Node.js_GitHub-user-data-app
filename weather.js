// display weather information  for user  - function from module
const axios = require('axios');

function weather(userGitHub, urlUserInfo, getWeather) {
    //callback function, funkcja wewnętrzna wywołana później
    function getWeather(user, urlWeather, Location) {
        axios.get(urlWeather, Location)
        .then(function (response) {
            let dataWeather = response;
            console.log(`${user} weather in  ${Location} is: ` +   dataWeather.data.weather[0].main + ', ' + dataWeather.data.weather[0].description);
              })
        .catch(function (error) {
            console.log(`Check the error connected to user weather: `, error.message); 
        });
    };

     axios.get(urlUserInfo)
     .then(function (response) {
          var userLocation = response.data.location;
          console.log(`Github ${userGitHub} location is: ` + userLocation);
          var urlUserWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${userLocation}`;
          //callback function
          getWeather(userGitHub, urlUserWeather, userLocation)
          })
     .catch(function (error) {
          console.log('Check the error connected to user location: ', error.message); 
     });
};

// function export
module.exports = {
weather: weather,
}
