

let theCharlotte = {
   "data": {   
        "time": "2024-03-08T16:39:00Z",
        "values": {
            "cloudBase": 1,
            "cloudCeiling": null,
            "cloudCover": 47,
            "dewPoint": 9.69,
            "freezingRainIntensity": 0,
            "humidity": 59,
            precipitationProbability: 0,
            "pressureSurfaceLevel": 733.57,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            temperature: 17.88,
            "temperatureApparent": 17.88,
            "uvHealthConcern": 3,
            "uvIndex": 7,
            "visibility": 8.22,
            "weatherCode": 1101,
            windDirection: 75.81,
            "windGust": 11.19,
            windSpeed: 3.81
        }
    },
},
    
{ "location": {
        "lat": 4.63261604309082,
        "lon": -74.08586883544922,
        "name": "Charolette, Avenida Calle 26, El Recuerdo, UPZs de Bogotá, Localidad Teusaquillo, Bogotá, Bogotá Distrito Capital - Municipio, RAP (Especial) Central, 111321, Colombia",
        "type": "hotel"
    }
}


// function getData(users) {
//     let i = 0;
//     while(i < users.length){
//     console.log(users[i]);
//     i++
   // }

   // {} = this is an empty object
let charlotte = {};

charlotte.temperature = theCharlotte.data.values.temperature;
console.log(theCharlotte);

