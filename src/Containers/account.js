import React,{Component} from 'react';
import '../Styles/account.css';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Popup from 'reactjs-popup';
import Password from '../Components/password.js';
import Email from '../Components/email.js';
import Address from '../Components/address.js';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Nav from '../Components/nav.js';
import {Link} from 'react-router-dom';
import POPUP from '../Components/popup.js';
import Sidemenu from'../Components/SideMenu.js';

class Account extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '',
                  region: '' ,
                  openEmailPopup: false ,
                  openPassword: false,
                  optionSideMenu:'1',
                  openSettings: false,
                  open3: false,
                  emailAddress: true,
                  phoneNumber: true,
                  cl2:true
                };
    this.openModalEmailPopup = this.openModalEmailPopup.bind(this)
    this.closeModalEmailPopup = this.closeModalEmailPopup.bind(this)
    this.openModalSettings = this.openModalSettings.bind(this)
    this.closeModalSettings = this.closeModalSettings.bind(this)
    this.openModalPassword = this.openModalPassword.bind(this)
    this.closeModalPassword = this.closeModalPassword.bind(this)
    this.openModal3 = this.openModal3.bind(this)
    this.closeModal3 = this.closeModal3.bind(this)
    this.toggleEmailPopup = this.toggleEmailPopup.bind(this)
    this.togglecl2 = this.togglecl2.bind(this)
    this.togglecl3 = this.togglecl3.bind(this)
  }
  selectCountry (val) {
    this.setState({ country: val });
  }

  openModalEmailPopup (){
    this.setState({ openEmailPopup: true })
  }
  closeModalEmailPopup () {
    this.setState({ openEmailPopup: false })
  }
  openModalPassword (){
    this.setState({ open2: true })
  }
  closeModalPassword () {
    this.setState({ open2: false })
  }
  openModalSettings (){
    this.setState({ openSetting: true })
  }
  closeModalSettings () {
    this.setState({ openSetting: false })
  }
  openModal3 (){
    this.setState({ open3: true })
  }
  closeModal3 () {
    this.setState({ open3: false })
  }
  toggleEmailPopup () {
    this.setState({
      emailAddress:false,
      openEmailPopup:false
     })
   }
  togglecl2 () {
       this.setState({
         phoneNumber:false,
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
     const contentStyleSettings = {
        width: "60%",
        height:"100%",
      };
  return (
    <div className="Account">
    <Nav/>
      <div class="Basic">
         <Sidemenu option={this.state.optionSideMenu}/>
         <div class="Content">
            <h3>Contact Information</h3>
            <h3 class="Grey-Text">Email address</h3>
            <div className={this.state.emailAddress?"Profile-Input":"Display-none"}>
                <p>abcd@mckinley.com</p>
                <input class="Button" onClick={this.openModalEmailPopup} type="submit" value="Remove"></input>
                <Popup
                  contentStyle={contentStyle}
                  open={this.state.openEmailPopup}
                  closeOnDocumentClick
                  onClose={this.closeModalEmailPopup}>
                <Email
                  onCloseModdal={this.closeModalEmailPopup}
                  onChangeCl={this.toggleEmailPopup}
                />
                </Popup>
            </div>
            <h4>Add Email Address</h4>
            <h3 class="Grey-Text">Phone Number</h3>
            <div className={this.state.phoneNumber?"Profile-Input":"Display-none"}>
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
            <h3 className={this.state.Address?"Grey-Text":"Display-none"}>No delivery addresses listed yet.</h3>
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
              <input class="Button" onClick={this.openModalPassword} type="submit" value="Change"></input>
              <Popup
               contentStyle={contentStyle1}
              open={this.state.openPassword}
              closeOnDocumentClick
               onClose={this.closeModalPassword}
              >
               <Password
               onCloseModdal2={this.closeModalPassword}/>
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
                  <input class="Button-TypeTwo" onClick={this.openModalSettings} type="submit" value="Edit"></input>
                      <Popup
                      contentStyle={contentStyleSettings}
                      open={this.state.openSetting}
                      closeOnDocumentClick
                       onClose={this.closeModalSettings}
                      >
                      <POPUP/>
                      </Popup>

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
