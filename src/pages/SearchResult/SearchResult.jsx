import { useEffect, useState } from "react";
import { useDate } from "../../context";
import { HotelCard, Navbar } from "../../components";
import { useCategory } from "../../context/catagory-context";
import axios from "axios";

export const Searchresult = () => {
    const [hotels, setHotels] = useState([]); // Initialize as an empty array
    const { hotelCategory } = useCategory();
    const { destination } = useDate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3500/api/hotels?category=${hotelCategory}`);
                const finalData = response.data;
                setHotels(finalData);
            } catch (error) {
                console.error("Error fetching hotel data:", error);
                setHotels([]); // Optionally reset hotels on error
            }
        };

        fetchData();
    }, [hotelCategory, destination]); // Add hotelCategory to the dependency array

    const allHotelsDataSearched = hotels.filter(({ address, state, city, country }) =>
        address.toLowerCase().includes(destination.toLowerCase()) ||
        state.toLowerCase().includes(destination.toLowerCase()) ||
        city.toLowerCase().includes(destination.toLowerCase()) ||
        country.toLowerCase().includes(destination.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <section className="main d-flex align-center gap-larger cursor-pointer">
            {
                allHotelsDataSearched.length > 0 ? (
                    allHotelsDataSearched.map((hotel) => (
                        <HotelCard key={hotel.id} hotel={hotel} /> // Ensure to provide a unique key
                    ))
                ) : (
                    <h3>NO DATA FOUND</h3>
                )
            }
            </section>
        </>
    );
};