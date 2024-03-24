import axios from "axios";
// import moment from "moment"
import { useState , useEffect } from "react";
import { City } from 'country-state-city'
import { apiKey, apiURL } from "../helper/ApiHelper";
 const useWeather = (query) => {
    const [weather, setWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
     
    // console.log("useweather")
    useEffect(() => {
            async function fetchWeather() {
                try {
                  setIsLoading(true);
                  setError("");
                  const city = City.getAllCities().filter(
                      c => c.name === query || c.name.toLowerCase().includes(query)
                    )
                   
                    if (city.length === 0) {
                      return setError("Please input the correct country and cities")
                      
                    }
                    const lat = Number(city[0].latitude)
                    const lon = Number(city[0].longitude)
                    // console.log(`lat:${lat}`)
                    setIsLoading(true)
                    
                    const response = await axios.get(
                      `${apiURL}lat=${lat}&lon=${lon}&appid=${apiKey}`
                    )
                    if (response.error) throw new Error("Something is wrong with fetching weather")
                    const data = await response.data
                    setWeather(data)
                  } catch (error) {
                    setError(error)
                    setWeather([])
                  } finally {
                    setIsLoading(false)
                  }
            }
            // if number of character in the query is less than 3 wil not be search
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
export default useWeather