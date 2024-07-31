import React from 'react';
import "./Navbar.css";
import { useDate, useAuth } from '../../context';
import { AuthModal } from "../index";

export const Navbar = () => {
  const { guests, destination, checkInDate, dateDispatch } = useDate();
  const { openLoginSignup, authDispatch } = useAuth();

  const handleSearch = () => {
    dateDispatch({ type: "OPEN_SEARCH_MODAL" });
  };

  const getMonthName = (date) => {
    if (!date) return "Add date";
    return new Date(date).toLocaleString('default', { month: 'long' });
  };

  const handlePersonButton = () => {
    console.log("Clicked person button");
    authDispatch({ type: "OPEN_LOGIN_SIGNUP" });
  };

  const handleMenuClick = () => {
    // Implement menu click functionality if needed
    console.log("Menu clicked");
  };

  return (
    <header className="heading d-flex align-center justify-content">
      {
        openLoginSignup && <AuthModal/>
      }
      <h1 className="heading-1">
        <a className="link" href="/">Wanderlust Wonders</a>
      </h1>
      <nav className="d-flex align-center gap-large justify-content" >
        <div>
          <div className='form-container d-flex align-center shadow cursor-pointer' onClick={handleSearch}>
            <span className='form-option'>{destination || "Anywhere"}</span>
            <div className='border-right-1px'></div>
            <span className='form-option'>{getMonthName(checkInDate) || "Add Dates"}</span>
            <div className='border-right-1px'></div>
            <span className='form-option'>{guests || "Add Guests"}</span>
            <span className="search material-symbols-outlined">search</span>
          </div>
        </div>
        <div>
          <div className="timepasscontainer nav d-flex align-center cursor-pointer">
            <span className="material-icons-outlined profile-option menu" onClick={handleMenuClick}>
              menu
            </span>
            <span className="material-icons-outlined profile-option person" onClick={handlePersonButton}>
              person_2
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};