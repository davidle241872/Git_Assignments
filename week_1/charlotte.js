let charlottePostman = {
    "data": {
        "time": "2024-03-08T19:10:00Z",
        "values": {
            "cloudBase": 0.51,
            "cloudCeiling": 0.51,
            "cloudCover": 100,
            "dewPoint": 11.81,
            "freezingRainIntensity": 0,
            "humidity": 77,
            "precipitationProbability": 0,
            "pressureSurfaceLevel": 994.85,
            "rainIntensity": 0,
            "sleetIntensity": 0,
            "snowIntensity": 0,
            "temperature": 15.88,
            "temperatureApparent": 15.88,
            "uvHealthConcern": 0,
            "uvIndex": 1,
            "visibility": 16,
            "weatherCode": 1001,
            "windDirection": 132.31,
            "windGust": 6,
            "windSpeed": 3.69
        }
    },
    "location": {
        "lat": 35.22720718383789,
        "lon": -80.84308624267578,
        "name": "Charlotte, Mecklenburg County, North Carolina, United States",
        "type": "administrative"
    }
}

let theCharlotte = {};
theCharlotte.name = "Charlotte"
theCharlotte.temperature = charlottePostman.data.values.temperature;
theCharlotte.uvIndex = charlottePostman.data.values.uvIndex;
theCharlotte.windSpeed = charlottePostman.data.values.windSpeed;
theCharlotte.windDirection = charlottePostman.data.values.windDirection;
theCharlotte.precipitationProbability = charlottePostman.data.values.precipitationProbability;

    console.log(theCharlotte);
    // console.log(theCharlotte.temperature);
    // console.log(theCharlotte.windSpeed);
    // console.log(theCharlotte.precipitationProbability);
    // console.log(theCharlotte.uvIndex);