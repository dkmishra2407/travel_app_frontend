import React from 'react';
import "./Navbar.css"
import { SearchStayWithDate } from '../SearchStayWithDate/SearchStayWithDate';

const handelsearch = () =>{

}
export const Navbar = () => {
  return (
    <header className="heading d-flex align-center justify-content">
        <h1 className="heading-1">
          <a className="link" href="/">Wanderlust Wonders</a>
        </h1>\
      <nav className="d-flex align-center gap-large justify-content" onClick={handelsearch}>
        <div>
          <div className='form-container d-flex align-center shadow cursor-pointer'>
          <span className='form-option'>Any Where</span>
          <div className='border-right-1px'></div>
          <span className='form-option'>Any Week</span>
          <div className='border-right-1px'></div>
          <span className='form-option'>Add Guests</span>
          <span class="search material-symbols-outlined">search</span>
        </div></div>
        <div>
        <div className="timepasscontainer nav d-flex align-center cursor-pointer ">
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
