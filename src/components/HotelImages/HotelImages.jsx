import "./HotelImages.css";

export const HotelImages = ({ singlehotel }) => {
    const { image, imageArr } = singlehotel
    return (
        <div className="hotel-image-container d-flex shadow cursor-pointer">
            <div className="primary-image-container">
                <img src={image} alt="PICTURE OF THE IMAGE" className="image-main" />
            </div>
            <div className="imagesfromthearray gap-small">
                {imageArr && imageArr.map((img) => (
                    <img key={img} className="image-arr" src={img} alt="PICTURE FROM IMAGE ARRAY" />
                ))}
            </div>
        </div>
    );
};