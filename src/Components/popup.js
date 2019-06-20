import React from 'react';
import '../Styles/popup.css';
import PopUpCard from'./PopUpCard.js';

function Popup(){
  return (
    <div className="popup">
       <h3>MarketPlace Updates</h3>
         <PopUpCard/>
         <PopUpCard/>
         <PopUpCard/>
         <PopUpCard/>
         <PopUpCard/>
         <PopUpCard/>
         <PopUpCard/>
          <div class="PopupButton">
             <input class="Button" type="submit" value="Save"></input>
          </div>
    </div>
  );
}
export default Popup;
