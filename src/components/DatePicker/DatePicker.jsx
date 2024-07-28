import DatePicker from "react-datepicker"
import "./DatePicker.css"
 
export const Datepicker = () =>{
    return(
        <DatePicker
           dateFormat="dd/MM/yyyy"
           placeholderText="Check In"
           closeOnScroll= {true}
        />
    )
}