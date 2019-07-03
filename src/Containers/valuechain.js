import React from 'react';
import{Link} from 'react-router-dom';
import '../Styles/valuechain.css';
import Nav from '../Components/nav.js';
import ValueChainNumber from'../Components/ValueChainNumber.js';
import ValueChainDetails from'../Components/ValueChainDetails.js';
import ValueChainContract from'../Components/valuechaincontract.js';

function ValueChain(){
  return (
    <div className="ValueChain">
        <Nav/>
        <div class="Value">
            <div class="ValueSelection">
               <select class="Value-SelectionMenu">
                <option>Recent</option>
               </select>
               <select class="Value-SelectionMenu">
                 <option>Closed</option>
                 <option>Pending</option>
                 <option>Damaged</option>
                 <option>Extended</option>
                 <option>All Category</option>
               </select>
               <select class="Value-SelectionMenu">
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                  <option>Service 4</option>
                  <option>Service 5</option>
               </select>
            </div>
          <div class="ValueChainBase">
           <h4>Yesterday,30 May,2019</h4>
            <div class="ValueCard">
              <div class="ValueChain-NumberOne">
                 <ValueChainNumber/>
              </div>
              <div class="ValueChain-NumberTwo">
                 <ValueChainDetails/>
              </div>
              <div class="ValueChain-NumberThree">
                 <ValueChainContract/>
              </div>
            </div>
            <div class="ValueCard">
              <div class="ValueChain-NumberOne">
                 <ValueChainNumber/>
              </div>
              <div class="ValueChain-NumberTwo">
                 <ValueChainDetails/>
              </div>
              <div class="ValueChain-NumberThree">
                 <ValueChainContract/>
              </div>
            </div>
            <div class="ValueCard">
              <div class="ValueChain-NumberOne">
                 <ValueChainNumber/>
              </div>
              <div class="ValueChain-NumberTwo">
                 <ValueChainDetails/>
              </div>
              <div class="ValueChain-NumberThree">
                 <ValueChainContract/>
              </div>
            </div>
            <div class="ValueCard">
              <div class="ValueChain-NumberOne">
                 <ValueChainNumber/>
              </div>
              <div class="ValueChain-NumberTwo">
                 <ValueChainDetails/>
              </div>
              <div class="ValueChain-NumberThree">
                 <ValueChainContract/>
              </div>
            </div>
            <div class="ValueCard">
              <div class="ValueChain-NumberOne">
                 <ValueChainNumber/>
              </div>
              <div class="ValueChain-NumberTwo">
                 <ValueChainDetails/>
              </div>
              <div class="ValueChain-NumberThree">
                 <ValueChainContract/>
              </div>
            </div>
            <div class="ValueCard">
              <div class="ValueChain-NumberOne">
                 <ValueChainNumber/>
              </div>
              <div class="ValueChain-NumberTwo">
                 <ValueChainDetails/>
              </div>
              <div class="ValueChain-NumberThree">
                 <ValueChainContract/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ValueChain;
