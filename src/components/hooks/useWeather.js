import axios from "axios";
// import moment from "moment"
import { useState , useEffect } from "react";
import { City } from 'country-state-city'
 export function useWeather(query) {
    const [weather, setWeather] = useState([]);
    // const [searchHistory, setSearchHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    console.log(process.env.PORT)
    const key = "98403e260dbd4b15d7e073a501011dcf";
    const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?' 
    // console.log("useweather")
    useEffect(
        function() {
            async function fetchWeather() {
                try {
                  setIsLoading(true);
                  setError("");
                 // const aryWeatherData = []
                  // const first ="johor bahru"
                  // console.log(City.getAllCities().filter(
                  //   c => c.name === query || c.name.toLowerCase().includes(query)
                  // ))
                  const city = City.getAllCities().filter(
                      c => c.name === query || c.name.toLowerCase().includes(query)
                    )
                   
                    if (city.length === 0) {
                      return setError("Please input the correct country and cities")
                      
                    }
                    // const aryQuery = query.split(',');
                    const lat = Number(city[0].latitude)
                    const lon = Number(city[0].longitude)
                    // console.log(`lat:${lat}`)
                    setIsLoading(true)
                    
                    const response = await axios.get(
                      `${apiURL}lat=${lat}&lon=${lon}&appid=${key}`
                    )
                    if (response.error) throw new Error("Something is wrong with fetching weather")
                    const data = await response.data
                    console.log(data)
                    // aryWeatherData.push(data)
                    setWeather(data)
                  } catch (error) {
                    setError(error)
                    setWeather([])
                  } finally {
                    setIsLoading(false)
                  }
            }
            if (query.length < 3) {
              setWeather([]);
              setError("");
              return;
            }
            //console.log("fetching Weather")
            fetchWeather()
        },[query])
    return {weather, isLoading, error}

}