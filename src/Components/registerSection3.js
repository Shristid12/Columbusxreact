import React from 'react';
import '../Styles/login.css';
import cross from '../assets/error.png';

function RegisterSection3(){
  return (
    <div className="RegisterSection1">
        <div class="Signup2-RegisterOption">
            <div class="Label-ForTextBox">
              <h3 class="Grey-Text1">Add Your Email ID</h3>
              <p class="Grey-Text1">(We will send verification email to your mail)</p>
              </div>
              <div class="Text-BoxSection">
                <input class="Register-EmailTextBox" type="input" placeholder="Add here..."></input>
                <div class="RegisterEmail">
                   <p class="cX">Felix@mckinleyrice.com</p>
                   <img class="RegisterCross" src={cross}></img>
                </div>
              </div>
        </div>
        <div class="Signup2-RegisterOption">
           <div class="Label-ForTextBox">
              <p class="Cx">optional</p>
              <h3 class="Grey-Text1">Add Admin ID </h3>
              <p class="Grey-Text1">(We will send request to your friend)</p>
          </div>
          <div class="Text-BoxSection">
              <input class="Register-EmailTextBox" type="input" placeholder="Add here..."></input>
              <div class="RegisterEmail">
                 <p class="cX">David@mckinleyrice.com</p>
                 <img class="RegisterCross" src={cross}></img>
              </div>
          </div>
        </div>
    </div>
  );
}
export default RegisterSection3;
