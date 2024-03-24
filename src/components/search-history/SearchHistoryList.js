import "./SearchHistory.css";

const SearchHistoryList = ({searchHist, onDeleteHist, onSearchHist}) => {
    return(
        <div className="daily-item">
             <label className="day">{searchHist.description}</label>
             <label className="description">
                    {searchHist.searchDate}
                  </label>
                  
                  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="searchIcon"
            onClick={() => onSearchHist(searchHist.city)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
                  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="searchIcon"
            onClick={() => onDeleteHist(searchHist.id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.73708 6.54391V18.9857C5.73708 19.7449 6.35257 20.3604 7.11182 20.3604H16.8893C17.6485 20.3604 18.264 19.7449 18.264 18.9857V6.54391M2.90906 6.54391H21.0909"
            />
          </svg>
            
        </div>
    )
}
export default SearchHistoryList