function buttonClick() {

    fetch("https://api.open-meteo.com/v1/forecast?latitude=33.749&longitude=-84.388&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch")
    
    .then((response) => response.json())
    
         .then((data) => {
    
                let weatherDataAll = []
                weatherDataAll.push(data)
                let weatherData = []
                
                for(i = 0; i < 7; i++) {
                    let days = {
                        date: weatherDataAll[0].daily.time[i],
                        high: weatherDataAll[0].daily.temperature_2m_max[i],
                        low: weatherDataAll[0].daily.temperature_2m_min[i],
                        rainChance: weatherDataAll[0].daily.precipitation_probability_max[i],
                        windSpeed: weatherDataAll[0].daily.wind_speed_10m_max[i],      
                    }
                            weatherData.push(days)
    
                            let forecast = document.getElementById("weatherInfo");
                            let forecastDay =document.createElement("div");
                            forecastDay.classList.add("fDay")
    
                            let date = document.createElement("p");
                            date.innerText = weatherData[i].date;
    
                            let high = document.createElement("p");
                            high.innerText = weatherData[i].high;
                            
                            let low = document.createElement("p");
                            low.innerText = weatherData[i].low;
                            
                            let rainChance = document.createElement("p");
                            rainChance.innerText = weatherData[i].rainChance;
    
                            let windSpeed = document.createElement("p");
                            windSpeed.innerText = weatherData[i].windSpeed;                            
                        

                            forecastDay.appendChild(date);
                            forecastDay.appendChild(high);
                            forecastDay.appendChild(rainChance);
                            forecastDay.appendChild(windSpeed);
                            forecast.appendChild(forecastDay);

                           
                            }
                            
                            changeImage();
            }
        )
    }
    
    



