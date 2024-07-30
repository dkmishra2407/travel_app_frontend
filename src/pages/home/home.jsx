import React, { Fragment, useEffect, useState } from 'react';
import { Navbar,SearchStayWithDate } from '../../components';
import { HotelCard, Catagories } from '../../components';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./home.css";
import { useCategory } from '../../context/catagory-context';
import { useDate } from '../../context';


export const Home = () => {
  const [hotels, setHotels] = useState([]); // Initialize with an empty array
  const [hasmore, sethasmore] = useState(true);
  const [testdata, settestdata] = useState([]);

  const [currentindex, setcurrentindex] = useState(16);
   const { hotelCategory } = useCategory();
   const { isSearchModalopen } = useDate(); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const  data = await axios.get(`http://localhost:3500/api/hotels?category=${hotelCategory}`);
        console.log("API Response:", data.data); // Log the API response
        const finaldata = data.data;
        settestdata(finaldata);
        setHotels(finaldata ? finaldata.slice(0, 70) : []);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, [hotelCategory]);

  const FetchMoredata = () => {
    if (hotels.length >= testdata.length) {
      sethasmore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(hotels.concat(testdata.slice(currentindex, currentindex + 12)));
        setcurrentindex(currentindex + 12);
      }
      else {
        setHotels([]);
      }
    }, 1000)
  }

  const handleclosemodal = () =>{
    isSearchModalopen = false;
  }
  
  return (
    <Fragment>
      {
        isSearchModalopen && <SearchStayWithDate/>
      }
      <Navbar route="home" />
      <Catagories/>
      {
        hotels && hotels.length > 0 ? (
          <InfiniteScroll
            dataLength={currentindex + 12}
            hasMore={hasmore}
            next={FetchMoredata}
            loader={hotels.length > 0 && <h1 className='loading'>Loading....</h1>}
            endMessage={<p className='d-flex align-center'>ALL THE DATA HAS BEEN SEEN</p>}
          >
            <main className='main d-flex align-center wrap gap-larger'>
              {
                hotels && hotels.map((hotel) => <HotelCard hotel={hotel} key={hotel._id} />)
              }
            </main>
          </InfiniteScroll>
        ) : null
      }
    </Fragment>
  );
};