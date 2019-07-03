import React from 'react';
import sbi from '../assets/sbi.png';

function BankCards() {
  return (
    <div className="BankCards">
      <div class="Account-Popup">
         <img src={sbi} class="paymentcard_image"></img>
         <h4 class="BankCardText">State Bank of India</h4>
      </div>
    </div>
  );
}

export default BankCards;
