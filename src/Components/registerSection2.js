import React from 'react';
import '../Styles/login.css';
import cross from '../assets/error.png';

function RegisterSection2(){
  return (
    <div className="RegisterSection1">
        <div class="Signup2-RegisterOption">
            <div class="Label-ForTextBox">
              <h3 class="Grey-Text1">Add Your Official ID</h3>
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
              <h3 class="Grey-Text1">Add Company </h3>
              <p class="Grey-Text1">(We will make you the super admin if there is no listed super admin for this company)</p>
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
export default RegisterSection2;
