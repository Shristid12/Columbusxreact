import React from 'react';
import '../Styles/userpopup.css';

function UserPopup(){
  return (
    <div className="UserPopup">
        <p class="userpopup-header">Choose An Account:</p>
          <div class="userpopup-card">
            <div></div>
            <p>Personal</p>
          </div>
          <div class="">
            <div></div>
            <p>Organization</p>
          </div>
        <fr></fr>
         <h4>Settings</h4>
         <p>My Value Chain</p>
         <p>Legal Chain</p>
         <p>About Us</p>
         <p>Careers</p>
         <p>Help Center</p>
         <p>Sign Out</p>
    </div>
  );
}
export default UserPopup;
