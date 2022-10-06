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
            var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latCity+'&lon='+lonCity+'&appid=a31f343d33efe24b67a5a44215b748ad';

        fetch(weatherUrl)
            .then(function (response) {
            return response.json();
            })
    
            .then(function (data) {
            console.log(data)
            var latCity = data[0].lat;
            var lonCity = data[0].lon;
            var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latCity+'&lon='+lonCity+'&appid=a31f343d33efe24b67a5a44215b748ad&units=imperial';
            })

    })
}


function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a31f343d33efe24b67a5a44215b748ad';

  fetch(requestUrl)
  // then is needed because retirning the data takes awhile
    .then(function (response) {
      return response.json();
    })
    // recieves parsed data
    .then(function (data) {
      console.log(data)
      })
}

// fetchButton.addEventListener('click', getApi);
var requestCoord = 'http://api.openweathermap.org/geo/1.0/direct?q=San Francisco&limit=5&appid=a31f343d33efe24b67a5a44215b748ad';

fetch(requestCoord)
// then is needed because retirning the data takes awhile
  .then(function (response) {
    return response.json();
  })
  // recieves parsed data
  .then(function (data) {
    console.log(data)
    })


var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.7790262&lon=-122.419906&appid=a31f343d33efe24b67a5a44215b748ad&units=imperial';


    fetch(requestUrl)
    // then is needed because retirning the data takes awhile
      .then(function (response) {
        return response.json();
      })
      // recieves parsed data
      .then(function (data) {
        console.log(data)
        })