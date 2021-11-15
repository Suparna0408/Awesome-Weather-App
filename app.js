window.addEventListener("load", () =>{
    let long;
    let lat;
    
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = "http://127.0.0.1:5500/WeatherApp/";
                const api = `api.openweathermap.org/data/2.5/onecall?lat=${lat}&long=${long}&appid= {d925ccfc61a5c5b1ccb40153794477bb}`;
                fetch(api)
                    .then(resp=>{
                        // if(!resp.ok) throw new Error(resp.statusText);
                        // return resp.json();
                        console.log(resp);
                    })
                    .then(data =>{
                        console.log(data);
                    })
                    .catch(console.err);
            })
        }
})