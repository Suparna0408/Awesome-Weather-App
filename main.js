// Get all inputs
const city = document.querySelector(".city_name");
let button = document.querySelector(".btn");
const degree = document.querySelector(".deg");
const climate = document.querySelector(".cli");

button.addEventListener("click", () =>{
    //Get city input value
    const cityName = city.value;
    // console.log(cityName);

    API_key = "d925ccfc61a5c5b1ccb40153794477bb"
    //Fetch the openweather api
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            //Clear the cityname
            city.value = ' ';

            let tem = data.main.temp - 273.15;
            // console.log(data.main.temp, tem);
            degree.innerHTML = `<p> ${tem.toFixed(2)} &#176C</p>`;
            climate.innerHTML = `<p>${data.weather[0].description}</p>`
        })

})




// window.addEventListener("load", () =>{
//     let long;
//     let lat;
    
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition((position)=>{
//                 long = position.coords.longitude;
//                 lat = position.coords.latitude;

//                 const proxy = "http://127.0.0.1:5500/WeatherApp/";
//                 const api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&long=${long}&appid= {d925ccfc61a5c5b1ccb40153794477bb}`;
//                 fetch(api)
//                     .then(resp=>{
//                         // if(!resp.ok) throw new Error(resp.statusText);
//                         // return resp.json();
//                         console.log(resp);
//                     })
//                     .then(data =>{
//                         console.log(data);
//                     })
//                     .catch(console.err);
//             })
//         }
// })