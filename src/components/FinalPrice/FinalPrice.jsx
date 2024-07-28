import "./FinalPrice.css"

export const FinalPrice =({singlehotel}) =>{

    const { price,rating } = singlehotel;

    return(
        <>
           <div className="price-details-container d-flex direction-row shadow gap">
            <div className="price-rating-container">
                <span className="price">RS.{price}/night</span>
                <span className="rating-1 d-flex"><span className="material-icons-outlined">star</span>{rating}</span>
            </div>
            
            <div className="check-in-out d-flex">
                <span>Check In</span>
                <span>Check out</span>
            </div>
            <div className="btn-material ">
             <div className="add-guest-block">
                Add Guest
             </div>
                <button className="reserve-btn d-flex align-center">
                    Reserve
                </button>
            </div>

            <div className="price-calculation-container">
                <div className="price-for-no-of-guests d-flex">
                    <span>Rs.{price} * 2</span>
                    <span>10000</span>
                </div>
                <div className="price-for-no-of-days d-flex">
                     <span>Rs.{price} * 1</span>
                     <span>2000</span>
                 </div>

                 <div className="price-total d-flex">
                    <span className="mar-top">Total Price</span>
                    <span className="mar-top">Rs.12000</span>
                 </div>
            </div>


           </div>
        </>
    )
}