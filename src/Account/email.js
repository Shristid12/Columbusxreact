import React from 'react';
import './email.css';

function Email(props){
  return (
    <div className="Email">
     <div class="uppp">
       <div class="Account-Popup">
          <h3>Remove email address</h3>
          <h3 onClick={props.onCloseModdal} class="Account-Popup-Cross">x</h3>
        </div>
        <p>Do you want to remove this email address?</p>
        <p class="iyyy">abcd @ mckinleyrice.com</p>
        <div class="uhhh">
          <input onClick={props.onCloseModdal} class="Account-Popup-ButtonTwo" type="submit" value="Cancel"></input>
          <input onClick={props.onChangeCl} class="Account-Popup-Button" type="submit" value="Remove"></input>
        </div>
     </div>
    </div>
  );
}
export default Email;
