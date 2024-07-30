import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { useDate } from "../../context";
import { type } from "@testing-library/user-event/dist/type";

export const Datepicker = ({ placeholder, checkintype }) => {
  const { checkInDate, checkOutDate, dateDispatch } = useDate();

  const handleDateChange = (date) => {
    dateDispatch({
      type: checkintype === "checkin" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    });
  };

  const handledatefocus = () => {
    dateDispatch({
      type: "DATE_FOCUS"
    })
  }

  return (
    <DatePicker
      selected={checkintype === "checkin" ? checkInDate : checkOutDate}
      onChange={(date) => handleDateChange(date)}
      onFocus={handledatefocus}
      className="search-dest input"
      dateFormat="dd/MM/yyyy"
      placeholderText="Add Dates"
      closeOnScroll={true}
    />
  );
};

export default Datepicker;