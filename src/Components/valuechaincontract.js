import React from 'react';
import '../Styles/valuechain.css';
import bookmark from '../assets/bookmark.png';
import share from '../assets/share.png';

function ValueChainContract(){
  return (
    <div className="ValueChainNumber">
        <div class="valuechaincontract">
            <h3 class="Text">Contract Details:</h3>
            <img class="ValueChainImage" src={bookmark}></img>
        </div>
        <div class="ValueChain-TextCard">
           <div class="ValueChain-Text">
              <p class="ValueChainOneContract"><span class="valuechainhead">Contract Status:</span><br></br>
            Success Status: <br></br>Contract Value:<br></br>Contract Date:<br></br>Delivery Date:<br></br>Damage Value:</p>
           </div>
           <div class="ValueChain-Text">
              <p class="ValueChainOne"><span class="valuechainhead2">closed</span><br></br>
            Successful <br></br>$10,000 <br></br>July 7th, 2019<br></br>August 7th, 2019<br></br>$5,000</p>
           </div>
        </div>
        <div class="imagecard">
           <p class="ValueChainText">310</p>
          <img class="ValueChainImageShare" src={share}></img>
        </div>
    </div>
  );
}
export default ValueChainContract;
