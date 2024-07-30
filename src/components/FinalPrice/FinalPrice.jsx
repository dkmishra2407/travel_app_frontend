import { useDate } from "../../context";
import "./FinalPrice.css";
import DatePicker from '../DatePicker/DatePicker';
import { type } from "@testing-library/user-event/dist/type";

export const FinalPrice = ({ singlehotel }) => {
    const { price, rating } = singlehotel;
    const { guests,checkInDate , checkOutDate , dateDispatch } = useDate();

    const handlenewguests = (event) => {
        dateDispatch({
            type: "GUESTS",
            payload: event.target.value
        })
    }

    const calculateNumberOfDays = () => {
        if (checkInDate && checkOutDate) {
            const checkIn = new Date(checkInDate);
            const checkOut = new Date(checkOutDate);
            const timeDifference = Math.abs(checkOut - checkIn);
            return Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
        }
        return 0; 
    };

    const numberOfDays = calculateNumberOfDays();

    return (
        <>
            <div className="price-details-container d-flex direction-row shadow gap">
                <div className="price-rating-container">
                    <span className="price-3">RS.{price}/night</span>
                    <span className="rating-1 d-flex"><span className="material-icons-outlined">star</span>{rating}</span>
                </div>

                <div className="check-in-out d-flex">
                    <div className="check-in-date">
                    <span className="CHECKIN">Check In</span>
                    <DatePicker checkintype="checkin"/>
                    </div>
                    <div className="check-out-date">
                    <span>Check out</span>
                    <DatePicker checkintype="checkout"/>
                    </div>
                </div>
                <div className="btn-material ">
                    <div className="add-guest-block">
                        <p className="add-guest-block-text">Add Guest</p>
                       {guests > 0 ? `${guests} guests` : <input className="guest-count"placeholder="Add Guests" type="number" value={guests} onChange={handlenewguests}/>}
                    </div>
                    <button className="reserve-btn d-flex align-center">
                        Reserve
                    </button>
                </div>

                <div className="price-calculation-container">
                    <div className="price-for-no-of-guests d-flex">
                        <span>Rs.{price} * {guests}</span>
                        <span>Rs.{price * guests}</span>
                    </div>
                    <div className="price-for-no-of-days d-flex">
                        <span>Rs.{price} * {numberOfDays}</span>
                        <span>Rs.{price * numberOfDays}</span>
                    </div>

                    <div className="price-total d-flex">
                        <span className="mar-top">Total Price</span>
                        <span className="mar-top">Rs.{price*guests + price*numberOfDays}</span>
                    </div>
                </div>
            </div>
        </>
    );
};