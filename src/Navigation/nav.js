import React from 'react';
import './nav.css';
import SearchField from "react-search-field";
import bell from'../bell.png';
import message from'../message.png';
import compass from'../compass.png';
import refresh from'../refresh.png';
import user from'../user.png';
import {Link} from 'react-router-dom';
import {TiUserOutline,TiRefresh,TiCompass,TiBell,TiMessage} from 'react-icons/ti';

function Nav() {
  return (
    <div className="Nav">
        <div class="Nav-imageBar">
          <h2 class="Nav-logo">columbusX</h2>
          <div class="Nav-Search">
            <input class="Nav-SearchArea" type="text" placeholder="Search"></input>
          </div>
          <img src={compass} class="Nav-Icons"></img>
          <img src={bell} class="Nav-Icons"></img>
          <img src={message} class="Nav-Icons"></img>
          <img src={user} class="Nav-Icons"></img>
          <img src={refresh} class="Nav-Icons"></img>
        </div>
        <div class="Nav-ContentBar">
           <p class="Nav-menuItemOne">My Page</p>
           <p class="Nav-menuItem">My Value Chain</p>
           <p class="Nav-menuItem">Legal Page</p>
           <Link to='/about' style={{ textDecoration: 'none',color:'black',width:'10%' }}><p class="Nav-menuItem">About Us</p></Link>
        </div>
    </div>
  );
}

export default Nav;
