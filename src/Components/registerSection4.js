import React from 'react';
import '../Styles/login.css';
import cross from '../assets/error.png';

function RegisterSection4(){
  return (
    <div className="RegisterSection1">
        <div class="Signup2-RegisterOption">
            <div class="Label-ForTextBox">
              <h3 class="Grey-Text1">Add Your Official ID</h3>
              <p class="Grey-Text1">(We will send verification email to your official mail)</p>
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
              <h3 class="Grey-Text1">Add Company </h3>
              <p class="Grey-Text1">(We will verify and list your company in our database)</p>
          </div>
          <div class="Text-BoxSection">
              <input class="Register-EmailTextBox" type="input" placeholder="Add here..."></input>
              <div class="RegisterEmail">
                 <p class="cX">mckinleyrice</p>
                 <img class="RegisterCross" src={cross}></img>
              </div>
          </div>
        </div>
    </div>
  );
}
export default RegisterSection4;
