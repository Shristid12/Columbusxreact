import '../Styles/profile.css';
import React from 'react';
import Cross from '../assets/cross.png';

function School(props) {
  return (
    <div className="School">
      <div class="Address-Popup">
         <h3>High School</h3>
         <img onClick={props.onCloseModdal} src={Cross} class="Account-Popup-Cross"></img>
      </div>
      <select class="School-Selection">
         <option value="B">Select School</option>
         <option value="a1">Option 1</option>
         <option value="a2">Option 1</option>
      </select>
       <div class="profile-schoolpopup">
           <select class="profile-schoolpopup-year">
             <option value="B">Year</option>
             <option value="a1">Option 1</option>
             <option value="a2">Option 1</option>
           </select>
           <p class="profile-schoolpopup-text">to</p>
           <select class="profile-schoolpopup-year">
             <option value="B">Year</option>
             <option value="a1">Option 1</option>
             <option value="a2">Option 1</option>
           </select>
       </div>
       <textarea class="schoolpopup-Textarea" rows="4" cols="35">
       Description
       </textarea>
       <div class="School-PopupButtonSection">
         <input class="Account-Popup-ButtonTwo" onClick={props.onCloseModdal} type="submit" value="Cancel"></input>
         <input class="Account-Popup-Button" type="submit" value="Save"></input>
       </div>
    </div>
  );
}

export default School;
