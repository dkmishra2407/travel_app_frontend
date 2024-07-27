import React from 'react';
import { FaBed, FaUsers, FaBath, FaRegStar, FaRegCalendarAlt } from 'react-icons/fa'; // Importing icons
import "./HotelDetails.css";

export const HotelDetails = ({ singlehotel }) => {
    const {
        hostName,
        hostJoinedOn,
        ameneties,
        numberOfStudios,
        numberOfBedrooms,
        numberOfGuests,
        numberOfBeds,
        numberOfBathrooms,
        rating,
        propertyType,
        houseRules,
        healthAndSafety,
        isCancelable
    } = singlehotel;

    return (
        <div className="hotel-details-container">
            <div className="hotel-details">
                <span className="highlight-details border-black">Hotel Details</span>
                <p className="host-name">
                    Hosted by {hostName}, joined on {hostJoinedOn}
                </p>
                <p className="guest-info">
                    <FaUsers /> {numberOfGuests} Guests, {numberOfBedrooms} Bedrooms, {numberOfStudios} Studios, {numberOfBeds} Beds, {numberOfBathrooms} Bathrooms
                </p>
            </div>

            <div className="dedicated-workplace">
                <span className="highlight-details border-black">Dedicated Workplace</span>
                <p className="workplace-description">
                    Create a focused environment that fosters collaboration, productivity, and employee well-being.
                </p>
            </div>

            <div className="great-location">
                <span className="highlight-details border-black">Great Location</span>
                <p className="rating">
                    <FaRegStar /> This is a great location with a {rating} rating.
                </p>
            </div>

            <div className="cancellation-policy">
                <span className="highlight-details border-black">Cancellation Policy</span>
                <p className="cancelable-or-not">
                    {isCancelable ? (
                        <span><FaRegCalendarAlt /> Hotel is cancelable within 7 days.</span>
                    ) : (
                        <span><FaRegCalendarAlt /> Hotel has no cancellation policy.</span>
                    )}
                </p>
            </div>

            <div className="hotel-offering">
                <span className="highlight-details">What we offer for the customers</span>
                <p className="property-type">Type: {propertyType}</p>
                <ul className="amenities-list">
                    {ameneties && ameneties.map((amenity, index) => (
                        <li key={index} className="amenities-name">
                            <FaBed /> {amenity}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="hotel-rules">
                <span className="highlight-details border-black">Hotel Rules</span>
                <ul className="house-rules-list">
                    {houseRules && houseRules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ul>
            </div>

            <div className="hotel-safety">
                <span className="highlight-details border-black">Hotel Safety</span>
                <ul className="health-and-safety-list">
                    {healthAndSafety && healthAndSafety.map((safety, index) => (
                        <li key={index}>{safety}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
