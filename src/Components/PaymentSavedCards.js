import React from 'react';
import '../Styles/payment.css';
import visa from '../assets/download.png';
import Dropdown from './dropdown.js';

function PaymentSavedCards () {
  return (
    <div className="PaymentSavedCards">
        <div class="Profile-Information">
           <div class="Profile-ImageInstitute">
              <img src={visa} class="payment_image"></img>
           </div>
           <div class="Profile-EducationalInfo">
               <h4>ICICI</h4>
               <p>**** **** **** 1234</p>
               <p class="Grey-Text">Lorem ipsum</p>
           </div>
           <div class="Profile-InputForm">
             <Dropdown/>
           </div>
        </div>
    </div>
  );
}
export default PaymentSavedCards;
