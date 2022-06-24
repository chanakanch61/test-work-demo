import React from 'react';
import '../App.css';
import Profile1 from '../img/profile.jpg';
import logo from '../img/logo.jpeg';


function Navbar() {
    return ( <div className="navbar">
        <div className="logo"><img src={logo} alt=""/></div>
        <div className="nav_side">
            <div></div>
        </div>
        <div className="rightSide">

            <div className="profile"><img src={Profile1} alt=""/></div>
            <div className="Link">
                <a href="/user">Chanakan
                </a>

            </div>
        </div>
        <div className="search">
            
            <input type="text" placeholder="Search name..."  />
            
        </div>
                <div className="option">
            <select>
                <option value="Resturant">Resturant</option>
                <option value="Bakerry">Bakerry</option>
                <option value="Cafe">Cafe</option>
            </select>
        </div>
        <div className="index_place">
    </div>       


    </div>
        
    );
}

export default Navbar;