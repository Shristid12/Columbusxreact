import React from 'react';
import BankCards from './BankCards.js';
import Cross from '../assets/cross.png';
import SearchField from "react-search-field";

function BankAccount(props) {
  return (
    <div className="BankAccount">
        <div class="Account-Popup">
           <h3>Select Your Bank</h3>
           <img onClick={props.onCloseModdal} src={Cross} class="Account-Popup-Cross"></img>
         </div>
         <SearchField
            placeholder="Search..."
            searchText="Search"
            className="test-class"
          />
        <BankCards/>
        <BankCards/>
        <BankCards/>
        <BankCards/>
        <BankCards/>
        <BankCards/>
        <BankCards/>
        <BankCards/>
        <BankCards/>
        <BankCards/>
    </div>
  );
}

export default BankAccount;
