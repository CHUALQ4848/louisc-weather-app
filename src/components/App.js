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


export default function App() {
  const [query, setQuery] = useState("");
  const {weather, isLoading, error} = useWeather(query)
  const [searchHistory, setSearchHistory] = useState([])
  // to handle query based on the search
  const handleQuery = (result) => {
    setQuery(result)
    fetchSearchHist()
    // console.log(query)
  }
  // to handle search record into search history
  const fetchSearchHist = () => {
    if (weather.length === 0) return
    const searchHist = newSearchHist(weather)
    const isDuplicate = searchHistory.some((search) => search.id === searchHist.id)
    if (!isDuplicate) setSearchHistory((searchHistory) => [...searchHistory, searchHist]);
  }
  // handle deletetion on search history
  const handleDeletedHist = (id) => {
    setSearchHistory(searchHistory.filter((search) => search.id !== id))
  }

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