import "./SearchStayWithDate.css"
import { Datepicker } from "../DatePicker/DatePicker"
export const SearchStayWithDate = () => {
  return (
     <div>
        <div className="destination-container">
            <div className="destination-option d-flex align-center">
                 <div className="location-container">
                    <label className="label">Where</label>
                    <input type="text" placeholder="Search Destination" className="search-dest" />
                 </div>

                 <div className="location-container">
                    <label className="label">Check In</label>
                    <Datepicker/>
                 </div>

                 <div className="location-container">
                    <label className="label">Check out</label>
                    <Datepicker/>
                 </div>

                 <div className="location-container">
                    <label className="label">No of Guests</label>
                    <input type="text" placeholder="Add Guests" />
                 </div>

                 <div className="search-container d-flex align-center cursor-pointer">
                    <span className="material-icon-outlined">search</span>
                 </div>
            </div>
        </div>
     </div>
  )
}

