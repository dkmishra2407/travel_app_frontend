
import "./hotelcard.css";
import InfiniteScroll from "react-infinite-scroll-component";
export const HotelCard = ({hotel}) => {

  const {_id,name,price,rating,image,state,address} = hotel;

  return (
    <div className="relative Hotelcard-container cursor-pointer shadow">
      {/* Image and hotel details */}
      <div className="">
        <img
          className="img"
          alt={name}
          src={image}
        />
        <div className="hotel-details">
          {/* Location and rating */}
          <div className="d-flex align-center">
            <span className="location">{name}</span>
            <span className="rating d-flex align-center">
              <span class="material-symbols-outlined">star</span>
              <span>{rating}</span>
            </span>
          </div>
          {/* Hotel name and price details */}
          <p className="hotel-name">
            <span>{address}</span>
          </p>
          <p className="price-details">
            <span className="price">RS {price}</span>
            <span> night</span>
          </p>
        </div>
        {/* Wishlist button */}
        <div className="Wishlist">
          <div className="wishlist-button absolute">
            <span class="bookmark material-symbols-outlined">bookmark_star</span>
          </div>
        </div>
      </div>
    </div>
  );
};