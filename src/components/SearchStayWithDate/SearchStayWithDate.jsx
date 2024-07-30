import "./SearchStayWithDate.css";
import { Datepicker } from "../DatePicker/DatePicker";
import { useDate } from "../../context";
import { useCategory } from "../../context/catagory-context";
import { useState, useEffect } from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";

export const SearchStayWithDate = () => {
  const { isdateinfocus,isdestinationisfocus , guests, destination, dateDispatch } = useDate();
  const { hotelCategory } = useCategory();
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/api/hotels?category=${hotelCategory}`);
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchData();
  }, [hotelCategory]);

  const handledestination = (event) => {
    dateDispatch({
      type: "DESTINATION",
      payload: event.target.value,
    });
  };

  const handleguests = (event) => {
    const guests = parseInt(event.target.value, 10) || 0; // Convert input to a number
    dateDispatch({
      type: "GUESTS",
      payload: guests,
    });
  };

  const handleresultclick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload: address,
    });
  };

  const handledestinationfocus = () => {
    dateDispatch({
      type: "RESULT_IN_FOCUS"
    })
  }

  const handlesearchclick = () => {
    dateDispatch({
      type: "SEARCH_CLICKED"
    })
    navigate(`/hotels/${destination}`)
  }

  
  const hoteldestinationoptions = hotels.filter(({ address, state, city, country }) =>
    address.toLowerCase().includes(destination.toLowerCase()) ||
    state.toLowerCase().includes(destination.toLowerCase()) ||
    city.toLowerCase().includes(destination.toLowerCase()) ||
    country.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <div>
      <div className="destination-container">
        <div className="destination-option d-flex align-center">
          <div className="location-container">
            <label className="label">Where</label>
            <input
              type="text"
              placeholder="Search Destination"
              className="search-dest"
              onChange={handledestination}
              onFocus={handledestinationfocus}
              autoFocus
              value={destination}
            />
          </div>

          <div className="location-container">
            <label className="label">Check In</label>
            <Datepicker placeholder="Check In" checkintype="checkin" />
          </div>

          <div className="location-container">
            <label className="label">Check Out</label>
            <Datepicker placeholder="Check Out" checkintype="checkout" />
          </div>

          <div className="location-container">
            <label className="label">No of Guests</label>
            <input
              className="search-dest"
              type="number"
              placeholder="Add Guests"
              onChange={handleguests}
              value={guests}
            />
          </div>

          <div className="search-container d-flex align-center cursor-pointer">
            <span className="search-dest-1 material-icon-outlined" onClick={handlesearchclick}>search</span>
          </div>
        </div>
      </div>
      {
        isdateinfocus && (
        <div className="search-result-container">
        {hoteldestinationoptions.map(({ address, city }) => (
          <p key={`${address}-${city}`} onClick={() => handleresultclick(address)}>
            {address}, {city}
          </p>
        ))}
      </div>
        )
      }
    </div>
  );
};