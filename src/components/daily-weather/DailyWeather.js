import {convertDegrees} from "../helper/HelperFunctions"
import "./DailyWeather.css";

const DailyWeather = (weather) => {
    
    let data = weather
    // console.log(data)
    if (data.weather.length === 0) return
    if (data.weather.list.length > 0) {
    let description = data.weather.list[0].weather[0].description
    let mainWeather = data.weather.list[0].weather[0].main
    let icon = data.weather.list[0].weather[0].icon
    let countryCities = `${data.weather.city.name}, ${data.weather.city.country}`
    let currentTemp = `${convertDegrees(data.weather.list[0].main.temp, "C")}°C`
    let humidity = `Humidity: ${data.weather.list[0].main.humidity}%`
    let tempHighLow = `H:${convertDegrees(data.weather.list[0].main.temp_max, "C")}°C L:${convertDegrees(data.weather.list[0].main.temp_min, "C")}°C`

    return (
        <div className="weather">
        <div className="top">
          <div>
            <p>Today's Weather</p>
            <p className="city">{countryCities}</p>
            <p className="weather-description condition">
              {description}
            </p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${icon}.png`}
          />
        </div>
        <div className="bottom">
          <p className="temperature">
            {currentTemp}
          </p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label condition">Conditions</span>
            </div>
       
            <div className="parameter-row">
              <span className="parameter-value">{humidity}</span>
            </div>
            <div className="parameter-row">
              
              <span className="parameter-value">{mainWeather}</span>
            </div>
            <div className="parameter-row">
              
              <span className="parameter-value">{tempHighLow}</span>
            </div>
          </div>
        </div>
        </div>
      );
    }
}
export default DailyWeather