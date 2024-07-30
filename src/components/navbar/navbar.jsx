import React from 'react';
import "./Navbar.css";
import { SearchStayWithDate } from '../SearchStayWithDate/SearchStayWithDate';
import { useDate } from '../../context';

export const Navbar = () => {
  const { guests, destination, checkInDate, dateDispatch } = useDate();

  const handleSearch = () => {
    console.log("clicked");
    dateDispatch({
      type: "OPEN_SEARCH_MODAL",
    });
  };

  const getMonthName = (date) => {
    if (!date) return "Add date";
    return new Date(date).toLocaleString('default', { month: 'long' });
  }
  return (
    <header className="heading d-flex align-center justify-content">
      <h1 className="heading-1">
        <a className="link" href="/">Wanderlust Wonders</a>
      </h1>
      <nav className="d-flex align-center gap-large justify-content" onClick={handleSearch}>
        <div>
          <div className='form-container d-flex align-center shadow cursor-pointer'>
            <span className='form-option'>{destination || "Any Where"}</span>
            <div className='border-right-1px'></div>
            <span className='form-option'>{getMonthName(checkInDate) || "Add Dates"}</span>
            <div className='border-right-1px'></div>
            <span className='form-option'>{guests || "Add Guests"}</span>
            <span className="search material-symbols-outlined">search</span>
          </div>
        </div>
        <div>
          <div className="timepasscontainer nav d-flex align-center cursor-pointer">
            <span className="material-icons-outlined profile-option menu">
              menu
            </span>
            <span className="material-icons-outlined profile-option person">
              person_2
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};