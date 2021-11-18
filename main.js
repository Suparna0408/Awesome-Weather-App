//Gets the input and button showdata elements
let city = document.querySelector(".city");
let btn = document.querySelector(".submit");
let showCity = document.querySelector(".showCity")
let showTemp = document.querySelector(".showTemp");
let showClimate = document.querySelector(".showClimate");
let dataContainer = document.querySelector(".dataContainer");
let flex = document.querySelector(".flex");

dataContainer.style.display = "none";

city.addEventListener('keyup', (Event)=>{
    if(Event.keyCode == 13){
        getData();
    }
})

btn.addEventListener('click', ()=>{
    getData();
});

function getData(){
    let cityName = city.value;
    let key = "d925ccfc61a5c5b1ccb40153794477bb";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        dataContainer.style.display = "flex";
        //disappear the city input after getting the weather data
        
        if(data.cod == 200){
            flex.style.display = "flex";
            city.value = " ";
            showCity.innerHTML = `${data.name}`;
            showTemp.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}&deg C`;
            showClimate.innerHTML = `${data.weather[0].description}`;
        }
        else{
            flex.style.display = "none";
            let notFound = document.createElement("div");
            notFound.className = "newDiv";
            if(cityName != " "){
                notFound.innerHTML = `${cityName} is not a city name`;
                dataContainer.appendChild(notFound);
                setTimeout(()=>{
                    notFound.innerHTML = `Please check the spelling or enter a valid city name`;
                    dataContainer.appendChild(notFound);
                }, 2000);
                console.log(cityName.length);
            }
            else{
                notFound.innerHTML = `You didnt enter anything`;
                dataContainer.appendChild(notFound);
                console.log(notFound);
            }
            setTimeout(()=>{
                dataContainer.removeChild(dataContainer.lastElementChild);
            },4000);
        }
    })
}