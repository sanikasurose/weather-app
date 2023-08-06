
const apiKey = "61f2c87498ec77f2ed22f3f3298bbe1b"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".icon");
const background = document.querySelector(".card");

const clouds = "linear-gradient(300deg, #C4DCE0, #93B5C6)";
const thunderstorm = "linear-gradient(300deg, #93B5C6, #6C7A89)";
const rain = "linear-gradient(300deg, #D6E6F2, #769FCD)";
const clear = "linear-gradient(300deg, #ADF7F2, #15AAFF)";

const card = document.getElementById("card"); 

async function checkWeather(city) {

     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
     var data = await response.json();

     console.log(data);

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
     document.querySelector(".current-conditions").innerHTML = data.weather[0].main;

     if (data.weather[0].main == "Clouds") {
          weatherIcon.src = "images/clouds.png";
          card.style.background = clouds; 
     } 
     else if(data.weather[0].main == "Clear") {
          weatherIcon.src = "images/clear.png";
          card.style.background = clear; 
     } 
     else if(data.weather[0].main == "Rain") {
          weatherIcon.src = "images/rain.png";
          card.style.background = rain; 
     }
     else if(data.weather[0].main == "Drizzle") {
          weatherIcon.src = "images/drizzle.png";
          card.style.background = rain; 
     }
     else if(data.weather[0].main == "Mist") {
          weatherIcon.src = "images/mist.png";
          card.style.background = clouds; 
     }
     else if(data.weather[0].main == "Thunderstorm") {
          weatherIcon.src = "images/rain.png";
          card.style.background = thunderstorm; 
     }
     
}

searchBtn.addEventListener("click", ()=>{
     checkWeather(searchBox.value); 
})


/* float in animation */

function floatInElementsLeft() {
     const elementsToFloatLeft = document.querySelectorAll(".element-to-float-in-left"); 

     elementsToFloatLeft.forEach((element) => {
     element.classList.remove("float-in-left");
   });
 
     setTimeout(() => {
     elementsToFloatLeft.forEach((element) => {
       element.classList.add("float-in-left");
     });
   }, 10);

}

function floatInElementsRight() {
     const elementsToFloatRight = document.querySelectorAll(".element-to-float-in-right"); 

     elementsToFloatRight.forEach((element) => {
          element.classList.remove("float-in-right");
        });

          setTimeout(() => {
          elementsToFloatRight.forEach((element) => {
            element.classList.add("float-in-right");
          });
        }, 10);
}

function floatInElementsBottom() {
     const elementsToFloatBottom = document.querySelectorAll(".element-to-float-in-bottom"); 

     elementsToFloatBottom.forEach((element) => {
          element.classList.remove("float-in-bottom");
        });

          setTimeout(() => {
          elementsToFloatBottom.forEach((element) => {
            element.classList.add("float-in-bottom");
          });
        }, 10);
}

function currentConditions() {
     const conditions = document.querySelector(".current-conditions"); 

     conditions.classList.add("fade-in-hidden"); 

     setTimeout(() => {
          conditions.classList.remove("fade-in-hidden");
        }, 2000);
}