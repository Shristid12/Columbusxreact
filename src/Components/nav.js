import React from 'react';
import '../Styles/nav.css';
import bell from'../assets/bell.png';
import message from'../assets/message.png';
import compass from'../assets/compass.png';
import refresh from'../assets/refresh.png';
import user from'../assets/user.png';
import {Link} from 'react-router-dom';
import UserPopup from './UserPopup.js';
import ToolTip from 'react-portal-tooltip';

function Nav(props) {
  const [state, setState] = React.useState({
    UserPopupActive: false,
  });
  const showUserPopup = UserPopupActive => event => {
    setState({
      ...state,
      [UserPopupActive]: true,
    });
  };
  const hideUserPopup = UserPopupActive => event => {
    setState({
      ...state,
      [UserPopupActive]: false,
    });
  };
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
          <img src={user}
           onClick={showUserPopup('UserPopupActive')}
           class="Nav-Icons"
           id="user"></img>
           <ToolTip active={state.UserPopupActive} position="bottom" arrow="center" parent="#user">
              <UserPopup/>
            </ToolTip>
          <img src={refresh} class="Nav-Icons"></img>
        </div>
        <div className={props.page=='front'?"Display-none":"Nav-ContentBar"}>
           <p className={props.page=='page'?"pink-test":"Nav-menuItemOne"}>Settings</p>
           <p className="Nav-menuItem"><Link to='/valuechain'
           style={props.page=='valuechain'?{ textDecoration: 'none',color:'#ff0067'}:{ textDecoration: 'none',color:'white'}}
           className={props.page=='valuechain'?"pink-text":"Nav-menuItem"}>My Value Chain</Link></p>
           <p class="Nav-menuItem"><Link to='/legal'
           style={props.page=='legal'?{ textDecoration: 'none',color:'#ff0067'}:{ textDecoration: 'none',color:'white'}}
           className={props.page=='legal'?"pink-text":"Nav-menuItem"}>Legal Page</Link></p>
           <p className={props.page=='about'?"pink-test":"Nav-menuItem"}><Link to='/about'
            style={props.page=='about'?{ textDecoration: 'none',color:'#ff0067'}:{ textDecoration: 'none',color:'white'}}>About Us
            </Link></p>
        </div>
    </div>
  );
}

export default Nav;
