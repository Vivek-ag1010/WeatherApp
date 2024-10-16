const apiKey ="9e821d3ea9fd3b9d96e50b893e4972eb";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkWeather(city){
    const response=await fetch(apiUrl +  city +`&appid=${apiKey}`);
    const data=await response.json();
    console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wins").innerHTML=data.wind.speed+" km/h";
document.querySelector(".weather").innerHTML=data.wind.speed+" km/h";
}

searchBtn.addEventListener("click",()=>
{
    checkWeather(searchBox.value);
});

