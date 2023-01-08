let zip = document.getElementById("zip");
let btn = document.getElementById("btn");

let lat = "";
let lon = "";
let temp = "";
let condition = "";



async function convertZip() {

    let zipCode = document.getElementById("zip").value;


    let response = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip='+ zipCode + ',US&appid=93a45cd4512dda4ada2c083031a99e65')
    let data = await response.json();

    console.log(data);

    lat = data.lat;
    lon = data.lon;

    console.log(lat, lon);

    getWeather();

};

btn.addEventListener("click", convertZip);



async function getWeather() {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon='+ lon + '&appid=93a45cd4512dda4ada2c083031a99e65')
    let data = await response.json();
    
    temp = data.main['temp'];
    condition = data.weather[0]["main"];

    console.log(temp, condition)

    displayData();
    
}


function displayData() {

    const content = document.getElementById("content");
    content.innerHTML = "";
    
    const tempDiv = document.createElement("div");
    content.appendChild(tempDiv)
    tempDiv.id = "tempDiv";
    tempDiv.innerText = temp;

    const conditionDiv = document.createElement("div");
    content.appendChild(conditionDiv)
    conditionDiv.id = "conditionDiv";
    conditionDiv.innerText = condition;

    if(condition == "Clouds") {
        document.body.style.backgroundColor = "grey";

    } else if (condition == "Clear") {
        document.body.style.backgroundColor = "blue";
    } else if(condition == "Rain" || condition == "Rainy") {
        document.body.style.backgroundColor = "green";
    } else{
        document.body.style.backgroundColor = "yellow";
    }


}


