const API_KEY = "05fe8c8c92df063ac4e8c2bde5b8b84a";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json())
        .then(data=>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const name = data.name;
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);