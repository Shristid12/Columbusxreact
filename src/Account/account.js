import React,{Component} from 'react';
import './account.css';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Popup from 'reactjs-popup';
import Password from './password.js';
import Email from './email.js';
import Address from './address.js';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Nav from '../Navigation/nav.js';
import {Link} from 'react-router-dom';

class Account extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' ,open1: false ,open2: false,open3: false,cl: true,cl1: true,cl2:true};
    this.openModal1 = this.openModal1.bind(this)
    this.closeModal1 = this.closeModal1.bind(this)
    this.openModal2 = this.openModal2.bind(this)
    this.closeModal2 = this.closeModal2.bind(this)
    this.openModal3 = this.openModal3.bind(this)
    this.closeModal3 = this.closeModal3.bind(this)
    this.togglecl1 = this.togglecl1.bind(this)
    this.togglecl2 = this.togglecl2.bind(this)
    this.togglecl3 = this.togglecl3.bind(this)
  }
  selectCountry (val) {
    this.setState({ country: val });
  }

  openModal1 (){
    this.setState({ open1: true })
  }
  closeModal1 () {
    this.setState({ open1: false })
  }
  openModal2 (){
    this.setState({ open2: true })
  }
  closeModal2 () {
    this.setState({ open2: false })
  }
  openModal3 (){
    this.setState({ open3: true })
  }
  closeModal3 () {
    this.setState({ open3: false })
  }
  togglecl1 () {
    this.setState({
      cl:false,
      open1:false
     })
   }
  togglecl2 () {
       this.setState({
         cl1:false,
         open1:false
    })
  }
  togglecl3 () {
       this.setState({
         cl2:false,
         open1:false
    })
  }
  render(){
  const { country, region } = this.state;
  const contentStyle = {
     width: "15%",
     padding: "1%"
   };
   const contentStyle1 = {
      width: "18%",
      padding: "1%"
    };
    const contentStyle2 = {
       width: "18%",
       padding: "1%"
     };
  return (
    <div className="Account">
    <Nav/>
      <div class="Basic">
         <div class="Menu">
           <h3>Account Setting</h3>
           <p><Link to='/profile' style={{ textDecoration: 'none',color:'black' }}>Profile Setting</Link></p>
           <p>Payment Settings</p>
           <p>My Transactions</p>
           <p>Privacy Setting</p>
         </div>
         <div class="Content">
            <h3>Contact Information</h3>
            <h3 class="Grey-Text">Email address</h3>
            <div className={this.state.cl?"Profile-Input":"Display-none"}>
              <p>abcd@mckinley.com</p>
              <input class="Button" onClick={this.openModal1} type="submit" value="Remove"></input>
              <Popup
              contentStyle={contentStyle}
              open={this.state.open1}
              closeOnDocumentClick
               onClose={this.closeModal1}
              >
              <Email
              onCloseModdal={this.closeModal1}
              onChangeCl={this.togglecl1}
              />
              </Popup>
            </div>
            <h4>Add Email Address</h4>
            <h3 class="Grey-Text">Phone Number</h3>
            <div className={this.state.cl1?"Profile-Input":"Display-none"}>
              <p>+91 1234567890</p>
              <input class="Button" onClick={this.openModal1} type="submit" value="Remove"></input>
              <Popup
              contentStyle={contentStyle}
              open={this.state.open1}
              closeOnDocumentClick
               onClose={this.closeModal1}
              >
              <Email
               onCloseModdal={this.closeModal1}
               onChangeCl={this.togglecl2}
               />
              </Popup>
            </div>
            <h4>Add Phone Number</h4>
            <hr></hr>
            <h3>Delivery Address</h3>
            <h3 className={this.state.cl2?"Grey-Text":"Display-none"}>No delivery addresses listed yet.</h3>
            <h4 onClick={this.openModal3}>Add Delivery Address</h4>
            <Popup
            contentStyle={contentStyle2}
            open={this.state.open3}
            closeOnDocumentClick
             onClose={this.closeModal3}
            >
            <Address
            onCloseModdal={this.closeModal3}
            onChangeCl={this.togglecl2}/>
            </Popup>
            <hr></hr>
            <h3>Password</h3>
            <div class="Profile-Input">
              <p>*****************</p>
              <input class="Button" onClick={this.openModal2} type="submit" value="Change"></input>
              <Popup
               contentStyle={contentStyle1}
              open={this.state.open2}
              closeOnDocumentClick
               onClose={this.closeModal2}
              >
               <Password
               onCloseModdal2={this.closeModal2}/>
              </Popup>
            </div>
            <hr></hr>
            <h3>Select Language & Region</h3>
            <div class="Account-SelectLabel">
               <h3 class="Grey-Text">Language</h3>
               <h3 class="Grey-TextTwo">Country/Region</h3>
            </div>
          <div class="rtrr">
            <select class="Account-Select">
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="Hindi">Hindi</option>
            </select>
            <CountryDropdown
             class="Account-Select"
             value={country}
             onChange={(val) => this.selectCountry(val)} />
          </div>
             <hr></hr>
             <h3>Filtering</h3>
             <div class="Profile-Text">
                 <h3 class="Grey-Text">Filtered Tags</h3>
                 <input type="text" class="Profile-TextSelect" value="Add a filter"></input>
                 <input class="Button" type="submit" value="Add"></input>
             </div>
             <hr></hr>
             <h3>Notification settings</h3>
             <div class="Account-Notification-RowOne">
               <div class="Account-Notification-RowTwo">
                   <p>On Columbus X</p>
                   <p>Email Address</p>
                   <p>Desktop & Mobile</p>
                   <p>Text Message</p>
               </div>
               <div class="Account-Notification-RowTwo">
                 <p>All notifications, all sounds on</p>
                 <p>Only important notifications</p>
                 <p>Only important notifications</p>
                 <p>Only important notifications</p>
               </div>
              <div class="Account-Notification-RowThree">
                  <input class="Button-TypeTwo" type="submit" value="Edit"></input>
                  <br></br>
                  <input class="Button-TypeTwo" type="submit" value="Edit"></input>
                  <br></br>
                  <input class="Button-TypeTwo" type="submit" value="Edit"></input>
                  <br></br>
                  <input class="Button-TypeTwo" type="submit" value="Edit"></input>
              </div>
             </div>
         </div>
      </div>
    </div>
  );
}
}
export default Account;
