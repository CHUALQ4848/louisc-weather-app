
const Empty = ({title}) => {
    return (
        <div className="app-container">
            <label className="title">{title}</label>
            <div className="empty-item">
        
          <span>No record found</span>
        </div>
        </div>
        
      );
    }
export default Empty