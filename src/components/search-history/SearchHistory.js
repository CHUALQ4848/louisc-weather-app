import SearchHistoryList from "./SearchHistoryList"
import "./SearchHistory.css";

const SearchHistory = ({searchHistory, onDeleteHist, onSearchHist}) => {
    return(
        <div className="app-container">
        <label className="title">Search History</label>
        {searchHistory.map((rec) => (
                            <SearchHistoryList searchHist={rec} key={rec.id} onDeleteHist={onDeleteHist} onSearchHist={onSearchHist}/>
                        ))}
        
        </div>
    )
}
export default SearchHistory