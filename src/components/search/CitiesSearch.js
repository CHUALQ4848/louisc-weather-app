import { City } from 'country-state-city'

export function CitiesSearch(inputText) {
    let first = ''
    let second = ''
    if (inputText.includes(',')) {
        let split = inputText.split(',').map(item => item.trim().toLowerCase())
        first = split[0]
        second = split[1]
    let city = City.getAllCities().filter(
        c => c.name.toLowerCase() === first || c.name.toLowerCase().includes(first)
      )
      return city
    }
}