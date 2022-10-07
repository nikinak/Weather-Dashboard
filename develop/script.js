var atlantaButton = document.getElementById('atlanta').innerHTML;
var denverButton = document.getElementById('denver').innerHTML;
var atlantaButton = document.getElementById('seattle').innerHTML;
var sanFranciscoButton = document.getElementById('san-francisco').innerHTML;
var orlandoButton = document.getElementById('orlando').innerHTML;
var chicagoButton = document.getElementById('chicago').innerHTML;
var austinButton = document.getElementById('austin').innerHTML;
var search = document.getElementById('submit');
var inputCity = document.getElementById("city-name");
var todayDateText = document.getElementById("today-date");
var dayOneDateText = document.getElementById("date1");
var dayTwoDateText = document.getElementById("date2");
var dayThreeDateText = document.getElementById("date3");
var dayFourDateText = document.getElementById("date4");
var dayFiveDateText = document.getElementById("date5");
var today  = moment().format('L');
var dayOne = moment().add(1, 'days').format('L'); 
var dayTwo = moment().add(2, 'days').format('L'); 
var dayThree = moment().add(3, 'days').format('L'); 
var dayFour = moment().add(4, 'days').format('L'); 
var dayFive = moment().add(5, 'days').format('L'); 
// var currentTime = new Date().getHours();

// added formatting for dates

var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumid = document.getElementById("current-humid");
var currentEmoji = document.getElementById("current-emoji");

todayDateText.innerHTML = todayDateText.innerHTML.replace('date', today);

dayOneDateText.innerHTML = dayOneDateText.innerHTML.replace('Date', dayOne);

dayTwoDateText.innerHTML = dayTwoDateText.innerHTML.replace('Date', dayTwo);

dayThreeDateText.innerHTML = dayThreeDateText.innerHTML.replace('Date', dayThree);

dayFourDateText.innerHTML = dayFourDateText.innerHTML.replace('Date', dayFour);

dayFiveDateText.innerHTML = dayFiveDateText.innerHTML.replace('Date', dayFive);

search.addEventListener('click', grabCity);

function grabCity() {
  var searchedCity = document.getElementById("city-search").value;

  inputCity.innerHTML = inputCity.innerHTML.replace('City Name', searchedCity);
  
  var requestCoord = 'http://api.openweathermap.org/geo/1.0/direct?q='+ searchedCity +'&limit=5&appid=a31f343d33efe24b67a5a44215b748ad';

    fetch(requestCoord)
        .then(function (response) {
        return response.json();
        })
  
        .then(function (data) {
            var latCity = data[0].lat;
            var lonCity = data[0].lon;
            var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latCity+'&lon='+lonCity+'&appid=a31f343d33efe24b67a5a44215b748ad&units=imperial';

            var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?&lat='+latCity+'&lon='+lonCity+'&appid=a31f343d33efe24b67a5a44215b748ad&units=imperial';

        fetch(weatherUrl)
            .then(function (response) {
            return response.json();
            })
    
            .then(function (data) {
            console.log(data)
            // var tempOne = data[0].lat;
            // var windOne = data[0].lon;
            // var humidOne = data[0].lon;
            // var emojiOne = data[0].lon;
            })
        
        fetch(currentWeatherUrl)
            .then(function (response) {
            return response.json();
            })
    
            .then(function (data) {
            console.log(data);
            var tempNow = data.main.temp;
            var tempNowText = document.createTextNode(' '+tempNow+'\u00B0'+'F');
            var windNow = data.wind.speed;
            var windNowText = document.createTextNode(' '+windNow+' MPH');
            var humidNow = data.main.humidity;
            var humidNowText = document.createTextNode(' '+windNow+'%');
            var emojiNow = data.weather[0].main;
            currentTemp.appendChild(tempNowText);
            currentWind.appendChild(windNowText);
            currentHumid.appendChild(humidNowText);
            console.log(tempNow);
            console.log(windNow);
            console.log(humidNow);
            console.log(emojiNow);
            })

    })
}

// fetchButton.addEventListener('click', getApi);

// var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.7790262&lon=-122.419906&appid=a31f343d33efe24b67a5a44215b748ad&units=imperial';

// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?&lat=37.7790262&lon=-122.419906&appid=a31f343d33efe24b67a5a44215b748ad&units=imperial';


//     fetch(requestUrl)
//     // then is needed because retirning the data takes awhile
//       .then(function (response) {
//         return response.json();
//       })
//       // recieves parsed data
//       .then(function (data) {
//         console.log(data)
//         })

        // note for next time, make it 24 hours post what time it is now