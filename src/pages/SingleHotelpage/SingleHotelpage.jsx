import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar,HotelImages,HotelDetails,FinalPrice } from "../../components";
import "./SingleHotelpage.css"

export const SingleHotelpage = () => {
    const { _id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3500/api/hotels/${_id}`);
                setData(response.data);
                console.log(response.data)
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [_id]); // Dependency array to refetch if _id changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const { name ,state } = data;
    console.log(name)
    return (
        <Fragment>
            <Navbar/>
            <main className="single-hotel-page">
               <p className="heading-name">{name},{state}</p>
               <HotelImages singlehotel={data}/>
               <div className="d-flex">
               <HotelDetails singlehotel={data}/>
               <FinalPrice singlehotel={data}/>
               </div>
            </main>
        </Fragment>
    );
};