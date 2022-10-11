var buttonList = $('#button-list-history')
var buttonListActive = $('#button-list')
var container = document.getElementById('change');
var containerOne = document.getElementById('change-one');
var containerTwo = document.getElementById('change-two');
var containerThree = document.getElementById('change-three');
var containerFour = document.getElementById('change-four');
var containerFive = document.getElementById('change-five');
var containerSix = document.getElementById('change-six');
var containerSeven = document.getElementById('change-seven');
var containerEight = document.getElementById('change-eight');
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
var currentTime = new Date().getHours();

console.log(currentTime);

// added formatting for dates

var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumid = document.getElementById("current-humid");
var currentEmoji = document.getElementById("current-emoji");

var twoTemp = document.getElementById("day-two-temp");
var twoWind = document.getElementById("day-two-wind");
var twoHumid = document.getElementById("day-two-humid");
var twoIcon = document.getElementById("day-two-icon");

var threeTemp = document.getElementById("day-three-temp");
var threeWind = document.getElementById("day-three-wind");
var threeHumid = document.getElementById("day-three-humid");
var threeIcon = document.getElementById("day-three-icon");

var oneTemp = document.getElementById("day-one-temp");
var oneWind = document.getElementById("day-one-wind");
var oneHumid = document.getElementById("day-one-humid");
var oneIcon = document.getElementById("day-one-icon");

var fourTemp = document.getElementById("day-four-temp");
var fourWind = document.getElementById("day-four-wind");
var fourHumid = document.getElementById("day-four-humid");
var fourIcon = document.getElementById("day-four-icon");

var fiveTemp = document.getElementById("day-five-temp");
var fiveWind = document.getElementById("day-five-wind");
var fiveHumid = document.getElementById("day-five-humid");
var fiveIcon = document.getElementById("day-five-icon");


todayDateText.innerHTML = todayDateText.innerHTML.replace('date', today);

dayOneDateText.innerHTML = dayOneDateText.innerHTML.replace('Date', dayOne);

dayTwoDateText.innerHTML = dayTwoDateText.innerHTML.replace('Date', dayTwo);

dayThreeDateText.innerHTML = dayThreeDateText.innerHTML.replace('Date', dayThree);

dayFourDateText.innerHTML = dayFourDateText.innerHTML.replace('Date', dayFour);

dayFiveDateText.innerHTML = dayFiveDateText.innerHTML.replace('Date', dayFive);

search.addEventListener('click', grabCity);

let indexOne = '';
let indexTwo = '';
let indexThree = '';
let indexFour = '';
let indexFive = '';

if(currentTime == 1){
    indexOne = 12;
    indexTwo = 20;
    indexThree = 28;
    indexFour = 36;
    indexFive = 39;
}

else if( (currentTime == 2) || (currentTime == 3) || (currentTime == 4) ){
    indexOne = 11;
    indexTwo = 19;
    indexThree = 27;
    indexFour = 35;
    indexFive = 39;
}

else if( (currentTime == 5) || (currentTime == 6) || (currentTime == 7 )) {
    indexOne = 10;
    indexTwo = 18;
    indexThree = 26;
    indexFour = 34;
    indexFive = 39;
}

else if( (currentTime == 8) || (currentTime == 9) || (currentTime == 10) ){
    indexOne = 9;
    indexTwo = 17;
    indexThree = 25;
    indexFour = 33;
    indexFive = 39;
}

else if( (currentTime == 11) || (currentTime == 12) || (currentTime == 13) ){
    indexOne = 8;
    indexTwo = 16;
    indexThree = 24;
    indexFour = 32;
    indexFive = 39;
}

else if( (currentTime == 14) || (currentTime == 15) || (currentTime == 16) ){
    indexOne = 7;
    indexTwo = 15;
    indexThree = 23;
    indexFour = 31;
    indexFive = 39;
}

else if( (currentTime == 17) || (currentTime == 18) || (currentTime == 19) ){
    indexOne = 6;
    indexTwo = 14;
    indexThree = 22;
    indexFour = 30;
    indexFive = 38;
}

else if( (currentTime == 20) || (currentTime == 21) || (currentTime == 22) ){
    indexOne = 5;
    indexTwo = 13;
    indexThree = 21;
    indexFour = 29;
    indexFive = 37;
}

else if((currentTime == 23) || (currentTime == 0)){
    indexOne = 4;
    indexTwo = 12;
    indexThree = 20;
    indexFour = 28;
    indexFive = 36;
}

console.log(indexOne);

var storedCitiesHistory = JSON.parse(localStorage.getItem("searchedCityList"));

console.log(storedCitiesHistory);

if(storedCitiesHistory == null) {

}

else {
for (let i = 0; i < storedCitiesHistory.length; i++) {
    console.log(storedCitiesHistory.length);
    let buttonData = storedCitiesHistory[i];
    console.log(buttonData);
    buttonEl = $('<button>');
    buttonEl.attr('id', 'buttonName')
    buttonEl.attr('city', buttonData);
    buttonEl.text(buttonData); 
    buttonList.append(buttonEl);
}
}

$('#button-list-history').on('click', '#buttonName', (e) => {
    let searchedCity = $(e.target).attr('city') || $(e.target).closest('#buttonName').attr('city');
    console.log(searchedCity);

    inputCity.textContent = searchedCity + ' ';
    
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
          
          fetch(currentWeatherUrl)
              .then(function (response) {
              return response.json();
              })
      
              .then(function (data) {
              console.log(data);
              var tempNow = data.main.temp;
              var tempNowText = ' '+tempNow+'\u00B0'+'F';
              var windNow = data.wind.speed;
              var windNowText = ' '+windNow+' MPH';
              var humidNow = data.main.humidity;
              var humidNowText = ' '+humidNow+'%';
              var iconcode = data.weather[0].icon;
              var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  
              currentTemp.textContent = tempNowText;
              currentWind.textContent = windNowText;
              currentHumid.textContent = humidNowText;
              $('#wicon').attr('src', iconurl);
             
  
  
              fetch(weatherUrl)
              // then is needed because retirning the data takes awhile
                .then(function (response) {
                  return response.json();
                })
                // recieves parsed data
                .then(function (data) {
                  console.log(data);
                  let tempOne = data.list[indexOne].main.temp;
                  let tempOneText = ' '+tempOne+'\u00B0'+'F';
                  let windOne = data.list[indexOne].wind.speed;
                  let windOneText = ' '+windOne+' MPH';
                  let humidOne = data.list[indexOne].main.humidity;
                  let humidOneText = ' '+humidOne+'%';
                  let iconcodeOne = data.list[indexOne].weather[0].icon;
                  let iconurlOne = "http://openweathermap.org/img/w/" + iconcodeOne + ".png";
      
                  oneTemp.textContent = tempOneText;
                  oneWind.textContent = windOneText;
                  oneHumid.textContent = humidOneText;
                  $('#day-one-icon').attr('src', iconurlOne);
  
                  let tempTwo = data.list[indexTwo].main.temp;
                  let tempTwoText = ' '+tempTwo+'\u00B0'+'F';
                  let windTwo = data.list[indexTwo].wind.speed;
                  let windTwoText = ' '+windTwo+' MPH';
                  let humidTwo = data.list[indexTwo].main.humidity;
                  let humidTwoText = ' '+humidTwo+'%';
                  let iconcodeTwo = data.list[indexTwo].weather[0].icon;
                  let iconurlTwo = "http://openweathermap.org/img/w/" + iconcodeTwo + ".png";
      
                  twoTemp.textContent = tempTwoText;
                  twoWind.textContent = windTwoText;
                  twoHumid.textContent = humidTwoText;
                  $('#day-two-icon').attr('src', iconurlTwo);
  
                  let tempThree = data.list[indexThree].main.temp;
                  let tempThreeText = ' '+tempThree+'\u00B0'+'F';
                  let windThree = data.list[indexThree].wind.speed;
                  let windThreeText = ' '+windThree+' MPH';
                  let humidThree = data.list[indexThree].main.humidity;
                  let humidThreeText = ' '+humidThree+'%';
                  let iconcodeThree = data.list[indexThree].weather[0].icon;
                  let iconurlThree = "http://openweathermap.org/img/w/" + iconcodeThree + ".png";
      
                  threeTemp.textContent = tempThreeText;
                  threeWind.textContent = windThreeText;
                  threeHumid.textContent = humidThreeText;
                  $('#day-three-icon').attr('src', iconurlThree);
  
                  let tempFour = data.list[indexFour].main.temp;
                  let tempFourText = ' '+tempFour+'\u00B0'+'F';
                  let windFour = data.list[indexFour].wind.speed;
                  let windFourText = ' '+windFour+' MPH';
                  let humidFour = data.list[indexFour].main.humidity;
                  let humidFourText = ' '+humidFour+'%';
                  let iconcodeFour = data.list[indexFour].weather[0].icon;
                  let iconurlFour = "http://openweathermap.org/img/w/" + iconcodeFour + ".png";
      
                  fourTemp.textContent = tempFourText;
                  fourWind.textContent = windFourText;
                  fourHumid.textContent = humidFourText;
                  $('#day-four-icon').attr('src', iconurlFour);
  
                  let tempFive = data.list[indexFive].main.temp;
                  let tempFiveText = ' '+tempFive+'\u00B0'+'F';
                  let windFive = data.list[indexFive].wind.speed;
                  let windFiveText = ' '+windFive+' MPH';
                  let humidFive = data.list[indexFive].main.humidity;
                  let humidFiveText = ' '+humidFive+'%';
                  let iconcodeFive = data.list[indexFive].weather[0].icon;
                  let iconurlFive = "http://openweathermap.org/img/w/" + iconcodeFive + ".png";
      
                  fiveTemp.textContent = tempFiveText;
                  fiveWind.textContent = windFiveText;
                  fiveHumid.textContent = humidFiveText;
                  $('#day-five-icon').attr('src', iconurlFive);
  
  
  
                  })
  
              })
  
      })
  })

function grabCity() {
  var searchedCity = document.getElementById("city-search").value;

  inputCity.textContent = searchedCity + ' ';

  function addToHistory (value) {
  var history = getHistory();
  history.unshift(value);
  localStorage.setItem("searchedCityList", JSON.stringify(history.slice(0, 8)));
    }

  function getHistory () {
    return JSON.parse(localStorage.getItem("searchedCityList")) || [];
      }

  addToHistory($('#city-search').val());

  var citiesHistory = JSON.parse(localStorage.getItem("searchedCityList"));
  console.log(citiesHistory.length);
  if (citiesHistory.length == 1) {
    containerOne.className = 'show';
  }
  else if (citiesHistory.length == 2) {
    containerOne.className = 'show';
    containerTwo.className = 'show';
  }
  else if (citiesHistory.length == 3) {
    containerOne.className = 'show';
    containerTwo.className = 'show';
    containerThree.className = 'show';
  }
  else if (citiesHistory.length == 4) {
    containerOne.className = 'show';
    containerTwo.className = 'show';
    containerThree.className = 'show';
    containerFour.className = 'show';
  }
  else if (citiesHistory.length == 5) {
    containerOne.className = 'show';
    containerTwo.className = 'show';
    containerThree.className = 'show';
    containerFour.className = 'show';
    containerFive.className = 'show';
  }
  else if (citiesHistory.length == 6) {
    containerOne.className = 'show';
    containerTwo.className = 'show';
    containerThree.className = 'show';
    containerFour.className = 'show';
    containerFive.className = 'show';
    containerSix.className = 'show';
  }
  else if (citiesHistory.length == 7) {
    containerOne.className = 'show';
    containerTwo.className = 'show';
    containerThree.className = 'show';
    containerFour.className = 'show';
    containerFive.className = 'show';
    containerSix.className = 'show';
    containerSeven.className = 'show';
  }
  else if (citiesHistory.length == 8) {
    containerOne.className = 'show';
    containerTwo.className = 'show';
    containerThree.className = 'show';
    containerFour.className = 'show';
    containerFive.className = 'show';
    containerSix.className = 'show';
    containerSeven.className = 'show';
    containerEight.className = 'show';
  }
  
  $('#button-list-one').text(getHistory()[0] || '');
  buttonOne = document.getElementById('button-list-one');
  containerOne.setAttribute('name', (buttonOne.innerHTML));;
  $('#button-list-two').text(getHistory()[1] || '');
  buttonTwo = document.getElementById('button-list-two');
  containerTwo.setAttribute('name', (buttonTwo.innerHTML));;
  $('#button-list-three').text(getHistory()[2] || '');
  buttonThree = document.getElementById('button-list-three');
  containerThree.setAttribute('name', (buttonThree.innerHTML));;
  $('#button-list-four').text(getHistory()[3] || '');
  buttonFour = document.getElementById('button-list-four');
  containerFour.setAttribute('name', (buttonFour.innerHTML));;
  $('#button-list-five').text(getHistory()[4] || '');
  buttonFive = document.getElementById('button-list-five');
  containerFive.setAttribute('name', (buttonFive.innerHTML));;
  $('#button-list-six').text(getHistory()[5] || '');
  buttonSix = document.getElementById('button-list-six');
  containerSix.setAttribute('name', (buttonSix.innerHTML));;
  $('#button-list-seven').text(getHistory()[6] || '');
  buttonSeven = document.getElementById('button-list-seven');
  containerSeven.setAttribute('name', (buttonSeven.innerHTML));;
  $('#button-list-eight').text(getHistory()[7] || '');
  buttonEight = document.getElementById('button-list-eight');
  containerEight.setAttribute('name', (buttonEight.innerHTML));;

  container.classList.add('hide');
  
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
        
        fetch(currentWeatherUrl)
            .then(function (response) {
            return response.json();
            })
    
            .then(function (data) {
            console.log(data);
            var tempNow = data.main.temp;
            var tempNowText = ' '+tempNow+'\u00B0'+'F';
            var windNow = data.wind.speed;
            var windNowText = ' '+windNow+' MPH';
            var humidNow = data.main.humidity;
            var humidNowText = ' '+humidNow+'%';
            var iconcode = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

            currentTemp.textContent = tempNowText;
            currentWind.textContent = windNowText;
            currentHumid.textContent = humidNowText;
            $('#wicon').attr('src', iconurl);
           


            fetch(weatherUrl)
            // then is needed because retirning the data takes awhile
              .then(function (response) {
                return response.json();
              })
              // recieves parsed data
              .then(function (data) {
                console.log(data);
                let tempOne = data.list[indexOne].main.temp;
                let tempOneText = ' '+tempOne+'\u00B0'+'F';
                let windOne = data.list[indexOne].wind.speed;
                let windOneText = ' '+windOne+' MPH';
                let humidOne = data.list[indexOne].main.humidity;
                let humidOneText = ' '+humidOne+'%';
                let iconcodeOne = data.list[indexOne].weather[0].icon;
                let iconurlOne = "http://openweathermap.org/img/w/" + iconcodeOne + ".png";
    
                oneTemp.textContent = tempOneText;
                oneWind.textContent = windOneText;
                oneHumid.textContent = humidOneText;
                $('#day-one-icon').attr('src', iconurlOne);

                let tempTwo = data.list[indexTwo].main.temp;
                let tempTwoText = ' '+tempTwo+'\u00B0'+'F';
                let windTwo = data.list[indexTwo].wind.speed;
                let windTwoText = ' '+windTwo+' MPH';
                let humidTwo = data.list[indexTwo].main.humidity;
                let humidTwoText = ' '+humidTwo+'%';
                let iconcodeTwo = data.list[indexTwo].weather[0].icon;
                let iconurlTwo = "http://openweathermap.org/img/w/" + iconcodeTwo + ".png";
    
                twoTemp.textContent = tempTwoText;
                twoWind.textContent = windTwoText;
                twoHumid.textContent = humidTwoText;
                $('#day-two-icon').attr('src', iconurlTwo);

                let tempThree = data.list[indexThree].main.temp;
                let tempThreeText = ' '+tempThree+'\u00B0'+'F';
                let windThree = data.list[indexThree].wind.speed;
                let windThreeText = ' '+windThree+' MPH';
                let humidThree = data.list[indexThree].main.humidity;
                let humidThreeText = ' '+humidThree+'%';
                let iconcodeThree = data.list[indexThree].weather[0].icon;
                let iconurlThree = "http://openweathermap.org/img/w/" + iconcodeThree + ".png";
    
                threeTemp.textContent = tempThreeText;
                threeWind.textContent = windThreeText;
                threeHumid.textContent = humidThreeText;
                $('#day-three-icon').attr('src', iconurlThree);

                let tempFour = data.list[indexFour].main.temp;
                let tempFourText = ' '+tempFour+'\u00B0'+'F';
                let windFour = data.list[indexFour].wind.speed;
                let windFourText = ' '+windFour+' MPH';
                let humidFour = data.list[indexFour].main.humidity;
                let humidFourText = ' '+humidFour+'%';
                let iconcodeFour = data.list[indexFour].weather[0].icon;
                let iconurlFour = "http://openweathermap.org/img/w/" + iconcodeFour + ".png";
    
                fourTemp.textContent = tempFourText;
                fourWind.textContent = windFourText;
                fourHumid.textContent = humidFourText;
                $('#day-four-icon').attr('src', iconurlFour);

                let tempFive = data.list[indexFive].main.temp;
                let tempFiveText = ' '+tempFive+'\u00B0'+'F';
                let windFive = data.list[indexFive].wind.speed;
                let windFiveText = ' '+windFive+' MPH';
                let humidFive = data.list[indexFive].main.humidity;
                let humidFiveText = ' '+humidFive+'%';
                let iconcodeFive = data.list[indexFive].weather[0].icon;
                let iconurlFive = "http://openweathermap.org/img/w/" + iconcodeFive + ".png";
    
                fiveTemp.textContent = tempFiveText;
                fiveWind.textContent = windFiveText;
                fiveHumid.textContent = humidFiveText;
                $('#day-five-icon').attr('src', iconurlFive);



                })

            })

    })
}

$('#button-container').on('click', '.show', (e) => {
    let searchedCity = $(e.target).attr('name') || $(e.target).closest('.show').attr('name');
    console.log(searchedCity);
    inputCity.textContent = searchedCity + ' ';
    
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
          
          fetch(currentWeatherUrl)
              .then(function (response) {
              return response.json();
              })
      
              .then(function (data) {
              console.log(data);
              var tempNow = data.main.temp;
              var tempNowText = ' '+tempNow+'\u00B0'+'F';
              var windNow = data.wind.speed;
              var windNowText = ' '+windNow+' MPH';
              var humidNow = data.main.humidity;
              var humidNowText = ' '+humidNow+'%';
              var iconcode = data.weather[0].icon;
              var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  
              currentTemp.textContent = tempNowText;
              currentWind.textContent = windNowText;
              currentHumid.textContent = humidNowText;
              $('#wicon').attr('src', iconurl);
             
  
  
              fetch(weatherUrl)
              // then is needed because retirning the data takes awhile
                .then(function (response) {
                  return response.json();
                })
                // recieves parsed data
                .then(function (data) {
                  console.log(data);
                  let tempOne = data.list[indexOne].main.temp;
                  let tempOneText = ' '+tempOne+'\u00B0'+'F';
                  let windOne = data.list[indexOne].wind.speed;
                  let windOneText = ' '+windOne+' MPH';
                  let humidOne = data.list[indexOne].main.humidity;
                  let humidOneText = ' '+humidOne+'%';
                  let iconcodeOne = data.list[indexOne].weather[0].icon;
                  let iconurlOne = "http://openweathermap.org/img/w/" + iconcodeOne + ".png";
      
                  oneTemp.textContent = tempOneText;
                  oneWind.textContent = windOneText;
                  oneHumid.textContent = humidOneText;
                  $('#day-one-icon').attr('src', iconurlOne);
  
                  let tempTwo = data.list[indexTwo].main.temp;
                  let tempTwoText = ' '+tempTwo+'\u00B0'+'F';
                  let windTwo = data.list[indexTwo].wind.speed;
                  let windTwoText = ' '+windTwo+' MPH';
                  let humidTwo = data.list[indexTwo].main.humidity;
                  let humidTwoText = ' '+humidTwo+'%';
                  let iconcodeTwo = data.list[indexTwo].weather[0].icon;
                  let iconurlTwo = "http://openweathermap.org/img/w/" + iconcodeTwo + ".png";
      
                  twoTemp.textContent = tempTwoText;
                  twoWind.textContent = windTwoText;
                  twoHumid.textContent = humidTwoText;
                  $('#day-two-icon').attr('src', iconurlTwo);
  
                  let tempThree = data.list[indexThree].main.temp;
                  let tempThreeText = ' '+tempThree+'\u00B0'+'F';
                  let windThree = data.list[indexThree].wind.speed;
                  let windThreeText = ' '+windThree+' MPH';
                  let humidThree = data.list[indexThree].main.humidity;
                  let humidThreeText = ' '+humidThree+'%';
                  let iconcodeThree = data.list[indexThree].weather[0].icon;
                  let iconurlThree = "http://openweathermap.org/img/w/" + iconcodeThree + ".png";
      
                  threeTemp.textContent = tempThreeText;
                  threeWind.textContent = windThreeText;
                  threeHumid.textContent = humidThreeText;
                  $('#day-three-icon').attr('src', iconurlThree);
  
                  let tempFour = data.list[indexFour].main.temp;
                  let tempFourText = ' '+tempFour+'\u00B0'+'F';
                  let windFour = data.list[indexFour].wind.speed;
                  let windFourText = ' '+windFour+' MPH';
                  let humidFour = data.list[indexFour].main.humidity;
                  let humidFourText = ' '+humidFour+'%';
                  let iconcodeFour = data.list[indexFour].weather[0].icon;
                  let iconurlFour = "http://openweathermap.org/img/w/" + iconcodeFour + ".png";
      
                  fourTemp.textContent = tempFourText;
                  fourWind.textContent = windFourText;
                  fourHumid.textContent = humidFourText;
                  $('#day-four-icon').attr('src', iconurlFour);
  
                  let tempFive = data.list[indexFive].main.temp;
                  let tempFiveText = ' '+tempFive+'\u00B0'+'F';
                  let windFive = data.list[indexFive].wind.speed;
                  let windFiveText = ' '+windFive+' MPH';
                  let humidFive = data.list[indexFive].main.humidity;
                  let humidFiveText = ' '+humidFive+'%';
                  let iconcodeFive = data.list[indexFive].weather[0].icon;
                  let iconurlFive = "http://openweathermap.org/img/w/" + iconcodeFive + ".png";
      
                  fiveTemp.textContent = tempFiveText;
                  fiveWind.textContent = windFiveText;
                  fiveHumid.textContent = humidFiveText;
                  $('#day-five-icon').attr('src', iconurlFive);
  
  
  
                  })
  
              })
  
      })
})
