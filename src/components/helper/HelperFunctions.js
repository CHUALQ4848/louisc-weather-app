import moment from "moment"
export const convertDegrees = (temprature, metric) => {
    let convertedValue = 0
  
    if (metric === 'C') {
      convertedValue = Math.floor(temprature - 273.15)
    }
  
    if (metric === 'F') {
      convertedValue = Math.floor((temprature - 273.15) * 1.8 + 32)
    }
  
    return convertedValue
  }

export const newSearchHist = (weather) => {
  if (weather.length === 0) return
    const newSearchHist = {
    id: weather.city.id,
    city: weather.city.name,
    country: weather.city.country,
    description: `${weather.city.name}, ${weather.city.country}`,
    searchDate:  moment().format('Do MMM YYYY hh:mm a'),
    };
    return newSearchHist
}