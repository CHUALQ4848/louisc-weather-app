import {useState} from "react";
import "./App.css";
import Search from "./search/Search";
import DailyWeather from "./daily-weather/DailyWeather";
import Main from "./ui/Main";
import Box from "./ui/Box";
import SearchHistory from "./search-history/SearchHistory";
import Loader from "./ui/Loader";
import Error from "./ui/Error";
import Empty from "./ui/Empty";
import { newSearchHist } from "./helper/HelperFunctions";
import { useWeather } from "./hooks/useWeather";


//TODO: Push code to github
//      env issue
//      create file for api url and key


export default function App() {
  const [query, setQuery] = useState("");
  const {weather, isLoading, error} = useWeather(query)
  const [searchHistory, setSearchHistory] = useState([])

  const handleQuery = (result) => {
    setQuery(result)
    fetchSearchHist()
    // console.log(query)
  }

  const fetchSearchHist = () => {
    if (weather.length === 0) return
    const searchHist = newSearchHist(weather)
    console.log(searchHist)
    const isDuplicate = searchHistory.some((search) => search.id === searchHist.id)
    if (!isDuplicate) setSearchHistory((searchHistory) => [...searchHistory, searchHist]);
  }
 
  const handleDeletedHist = (id) => {
    setSearchHistory(searchHistory.filter((search) => search.id !== id))
  }
  console.log(searchHistory)
  return(
    <>
    <Main>
        <Box>
        <Search onAddQuery={handleQuery}/>
        {isLoading && <Loader />} 
        {!isLoading && !error && (
          <DailyWeather weather={weather}/>  
        )}
          {error && <Error message={error} />}
          {searchHistory.length===0 && <Empty title={"Search History"}/>}
          {searchHistory.length > 0 && !error && (
            <SearchHistory searchHistory={searchHistory} onDeleteHist={handleDeletedHist} onSearchHist={handleQuery}/>
          )}
          
        </Box>
        {/* <Box></Box> */}
      </Main>
    </>
  )
}