import React from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import '../Styles/ContactUs.css';
import Nav from'../Components/nav.js';
import Popup from 'reactjs-popup';
import CallUs from'../Components/contactUsPopup.js';
import MessageUs from'../Components/MessageUsPopup.js';

const contentStyle = {
   width: "70%",
   height:'80%',
   borderRadius: 4,
 };
 const contentStyle2 = {
    width: "22%",
    height:'75%',
    borderRadius: 4,
  };
function Contact() {
  const [state, setState] = React.useState({
    page:'front',
    open1: false,
    open2: false,
  });

  const openModal1 = open1 => event => {
    setState({
      ...state,
      [open1]: true,
    });
  };
  const closeModal1 = open1 => event => {
    setState({
      ...state,
      [open1]: false,
    });
  };
  return (
    <div className="Contact">
      <Nav page={state.page}/>
        <div class="FrontPage-BlackTab">
          <p class="Nav-menuItemFirst">Help Center |</p>
          <p class="Nav-menuItem">Using CX</p>
          <p class="Nav-menuItem">Managing Account</p>
          <p class="Nav-menuItem">Safety & Security</p>
          <p class="Nav-menuItem">Rules & Policy</p>
          <p class="Nav-menuItem">FAQ</p>
          <p class="Nav-menuItem">Contact US</p>
        </div>
        <div class="Content-Contact">
           <h3>Chat right now</h3>
           <div class="ConatctUs-Section">
             <p>Our messaging assistant can quickly solve many issues or direct you to the right person or place</p>
             <input class="Button" type="submit" onClick={openModal1('open2')} value="Chat"></input>
             <Popup
              contentStyle={contentStyle2}
              open={state.open2}
              closeOnDocumentClick
              onClose={closeModal1('open2')}
             >
               <MessageUs/>
            </Popup>
           </div>
           <p>(Instant chat always available)</p>
           <hr></hr>
            <h3>Have us call you</h3>
            <div class="ConatctUs-Section">
               <p>Our messaging assistant can quickly solve many issues or direct you to the right person or place</p>
               <input class="Button" type="submit" onClick={openModal1('open1')} value="Call Us"></input>
               <Popup
                contentStyle={contentStyle}
                open={state.open1}
                closeOnDocumentClick
                onClose={closeModal1('open1')}
               >
                 <CallUs/>
              </Popup>
            </div>
           <p>(Wait time is usually two minutes or less)</p>
        </div>
    </div>
  );
}

export default Contact;
