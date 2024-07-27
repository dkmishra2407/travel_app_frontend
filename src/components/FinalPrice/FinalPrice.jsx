import "./FinalPrice.css"

export const FinalPrice =({singlehotel}) =>{

    const { price,rating } = singlehotel;

    return(
        <>
           <div className="price-details-container d-flex direction-coloum shadow gap">
                {/* <div className="price-rating">
                    <div>
                    <p><span className="price">RS{price}</span>night</p>
                    </div>
                    <div>
                    <span className="d-flex align-center">
                        <span>{rating}</span>
                        <span className="material-icons-outlined">star</span>
                    </span>
                    </div>
                </div> */}

            <div className="price-rating-container">
                <span className="price">RS.5000/night</span>
                <span className="rating d-flex">4.86<span className="material-icons-outlined">star</span></span>
            </div>

           </div>
        </>
    )
}