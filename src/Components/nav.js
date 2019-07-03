import React from 'react';
import '../Styles/nav.css';
import bell from'../assets/bell.png';
import message from'../assets/message.png';
import compass from'../assets/compass.png';
import refresh from'../assets/refresh.png';
import user from'../assets/user.png';
import {Link} from 'react-router-dom';

function Nav(props) {
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
        <div className={props.page=='front'?"Display-none":"Nav-ContentBar"}>
           <p class="Nav-menuItemOne">My Page</p>
           <p class="Nav-menuItem">My Value Chain</p>
           <p class="Nav-menuItem"><Link to='/legal' style={{ textDecoration: 'none',color:'black' }}>Legal Page</Link></p>
           <p class="Nav-menuItem"><Link to='/about' style={{ textDecoration: 'none',color:'black' }}>About Us</Link></p>
        </div>
    </div>
  );
}

export default Nav;
