import React from 'react';
import '../Styles/email.css';
import Cross from '../assets/cross.png';

function Email(props){
  return (
    <div className="Email">
     <div class="uppp">
       <div class="Account-Popup">
          <h3>Remove email address</h3>
          <img onClick={props.onCloseModdal} src={Cross} class="Account-Popup-Cross"></img>
        </div>
        <p>Do you want to remove this email address?</p>
        <p class="Grey-Text">abcd @ mckinleyrice.com</p>
        <div class="Account-PopupButtonSection">
          <input onClick={props.onCloseModdal} class="Account-Popup-ButtonTwo" type="submit" value="Cancel"></input>
          <input onClick={props.onChangeCl} class="Account-Popup-Button" type="submit" value="Remove"></input>
        </div>
     </div>
    </div>
  );
}
export default Email;
