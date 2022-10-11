// defined global button and date variables
let buttonList = $('#button-list-history')
let buttonListActive = $('#button-list')
let container = document.getElementById('change');
let containerOne = document.getElementById('change-one');
let containerTwo = document.getElementById('change-two');
let containerThree = document.getElementById('change-three');
let containerFour = document.getElementById('change-four');
let containerFive = document.getElementById('change-five');
let containerSix = document.getElementById('change-six');
let containerSeven = document.getElementById('change-seven');
let containerEight = document.getElementById('change-eight');
let search = document.getElementById('submit');
let inputCity = document.getElementById("city-name");
let todayDateText = document.getElementById("today-date");
let dayOneDateText = document.getElementById("date1");
let dayTwoDateText = document.getElementById("date2");
let dayThreeDateText = document.getElementById("date3");
let dayFourDateText = document.getElementById("date4");
let dayFiveDateText = document.getElementById("date5");
let today  = moment().format('L');
let dayOne = moment().add(1, 'days').format('L'); 
let dayTwo = moment().add(2, 'days').format('L'); 
let dayThree = moment().add(3, 'days').format('L'); 
let dayFour = moment().add(4, 'days').format('L'); 
let dayFive = moment().add(5, 'days').format('L'); 
let currentTime = new Date().getHours();

console.log(currentTime);

// defined global variables for weather cards

let currentTemp = document.getElementById("current-temp");
let currentWind = document.getElementById("current-wind");
let currentHumid = document.getElementById("current-humid");
let currentEmoji = document.getElementById("current-emoji");

let twoTemp = document.getElementById("day-two-temp");
let twoWind = document.getElementById("day-two-wind");
let twoHumid = document.getElementById("day-two-humid");
let twoIcon = document.getElementById("day-two-icon");

let threeTemp = document.getElementById("day-three-temp");
let threeWind = document.getElementById("day-three-wind");
let threeHumid = document.getElementById("day-three-humid");
let threeIcon = document.getElementById("day-three-icon");

let oneTemp = document.getElementById("day-one-temp");
let oneWind = document.getElementById("day-one-wind");
let oneHumid = document.getElementById("day-one-humid");
let oneIcon = document.getElementById("day-one-icon");

let fourTemp = document.getElementById("day-four-temp");
let fourWind = document.getElementById("day-four-wind");
let fourHumid = document.getElementById("day-four-humid");
let fourIcon = document.getElementById("day-four-icon");

let fiveTemp = document.getElementById("day-five-temp");
let fiveWind = document.getElementById("day-five-wind");
let fiveHumid = document.getElementById("day-five-humid");
let fiveIcon = document.getElementById("day-five-icon");

// defined date functions
todayDateText.innerHTML = todayDateText.innerHTML.replace('date', today);

dayOneDateText.innerHTML = dayOneDateText.innerHTML.replace('Date', dayOne);

dayTwoDateText.innerHTML = dayTwoDateText.innerHTML.replace('Date', dayTwo);

dayThreeDateText.innerHTML = dayThreeDateText.innerHTML.replace('Date', dayThree);

dayFourDateText.innerHTML = dayFourDateText.innerHTML.replace('Date', dayFour);

dayFiveDateText.innerHTML = dayFiveDateText.innerHTML.replace('Date', dayFive);

// clickevent for search button
search.addEventListener('click', grabCity);

// defining variables for what time to pull each date from (aimed for the afternoon where feasible)
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

// added button data from local storage on page reload

let storedCitiesHistory = JSON.parse(localStorage.getItem("searchedCityList"));

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

// event for click event of prior search results button upon page load, pulling events from dynamically loaded buttons

$('#button-list-history').on('click', '#buttonName', (e) => {
    let searchedCity = $(e.target).attr('city') || $(e.target).closest('#buttonName').attr('city');
    console.log(searchedCity);

    inputCity.textContent = searchedCity + ' ';
    
    // requsting coordinates for city entered
    let requestCoord = 'http://api.openweathermap.org/geo/1.0/direct?q='+ searchedCity +'&limit=5&appid=a31f343d33efe24b67a5a44215b748ad';
  
      fetch(requestCoord)
          .then(function (response) {
          return response.json();
          })
    
          .then(function (data) {
              let latCity = data[0].lat;
              let lonCity = data[0].lon;
              let weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latCity+'&lon='+lonCity+'&appid=a31f343d33efe24b67a5a44215b748ad&units=imperial';
            
              var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?&lat='+latCity+'&lon='+lonCity+'&appid=a31f343d33efe24b67a5a44215b748ad&units=imperial';
          
            //   fetch for current weather API call
          fetch(currentWeatherUrl)
              .then(function (response) {
              return response.json();
              })
      
              .then(function (data) {
              console.log(data);
              let tempNow = data.main.temp;
              let tempNowText = ' '+tempNow+'\u00B0'+'F';
              let windNow = data.wind.speed;
              let windNowText = ' '+windNow+' MPH';
              let humidNow = data.main.humidity;
              let humidNowText = ' '+humidNow+'%';
              let iconcode = data.weather[0].icon;
              let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  
              currentTemp.textContent = tempNowText;
              currentWind.textContent = windNowText;
              currentHumid.textContent = humidNowText;
              $('#wicon').attr('src', iconurl);
             
  
                // fetch for 5 day weather data
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

//   function for click event from search button
function grabCity() {
  let searchedCity = document.getElementById("city-search").value;

  inputCity.textContent = searchedCity + ' ';

//   getting and storing data in local storage
  function addToHistory (value) {
  let history = getHistory();
  history.unshift(value);
  localStorage.setItem("searchedCityList", JSON.stringify(history.slice(0, 8)));
    }

  function getHistory () {
    return JSON.parse(localStorage.getItem("searchedCityList")) || [];
      }

  addToHistory($('#city-search').val());

// Added hiding and showing of search history buttons

  let citiesHistory = JSON.parse(localStorage.getItem("searchedCityList"));
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
  
  //   below functions mirror other event listener fetch approach
  
  let requestCoord = 'http://api.openweathermap.org/geo/1.0/direct?q='+ searchedCity +'&limit=5&appid=a31f343d33efe24b67a5a44215b748ad';

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

// click event fetch for history stored data that is retreived right after search (not on page load)

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
