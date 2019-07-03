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
                  openphonePopup: false ,
                  openAddressPopup: false,
                  openPassword: false,
                  optionSideMenu:'1',
                  openSettings: false,
                  emailAddress: true,
                  phoneNumber: true,
                  address:true
                };
    this.openModalEmailPopup = this.openModalEmailPopup.bind(this)
    this.closeModalEmailPopup = this.closeModalEmailPopup.bind(this)
    this.openModalphonePopup = this.openModalphonePopup.bind(this)
    this.closeModalphonePopup = this.closeModalphonePopup.bind(this)
    this.openModalAddressPopup = this.openModalAddressPopup.bind(this)
    this.closeModalAddressPopup = this.closeModalAddressPopup.bind(this)
    this.openModalSettings = this.openModalSettings.bind(this)
    this.closeModalSettings = this.closeModalSettings.bind(this)
    this.openModalPassword = this.openModalPassword.bind(this)
    this.closeModalPassword = this.closeModalPassword.bind(this)
    this.toggleEmailPopup = this.toggleEmailPopup.bind(this)
    this.togglePhonePopup = this.togglePhonePopup.bind(this)
    this.toggleAddressPopup = this.toggleAddressPopup.bind(this)
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
  openModalphonePopup (){
    this.setState({ openphonePopup: true })
  }
  closeModalphonePopup () {
    this.setState({ openphonePopup: false })
  }
  openModalAddressPopup (){
    this.setState({ openAddressPopup: true })
  }
  closeModalAddressPopup () {
    this.setState({ openAddressPopup: false })
  }
  openModalPassword (){
    this.setState({ openPassword: true })
  }
  closeModalPassword () {
    this.setState({ openPassword: false })
  }
  openModalSettings (){
    this.setState({ openSetting: true })
  }
  closeModalSettings () {
    this.setState({ openSetting: false })
  }

  toggleEmailPopup () {
    this.setState({
      emailAddress:false,
      openEmailPopup:false
     })
   }
  togglePhonePopup () {
       this.setState({
         phoneNumber:false,
         openphonePopup:false
    })
  }
  toggleAddressPopup () {
       this.setState({
         address:false,
         openAddressPopup:false
    })
  }
  render(){
  const { country, region } = this.state;
  const contentStyle = {
     width: "15%",
     padding: "1%",
     borderRadius: 4,
   };
   const contentStylePassword = {
      width: "22%",
      borderRadius: 4,
    };
    const contentStyleAddress = {
      width:'21%',
      borderRadius: 4,
     };
     const contentStyleSettings = {
        width: "60%",
        height:"100%",
        borderRadius: 4,
      };
  return (
    <div className="Account">
    <Nav/>
      <div class="Basic">
        <div class="Menu">
           <Sidemenu option={this.state.optionSideMenu}/>
        </div>
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
              <input class="Button" onClick={this.openModalphonePopup} type="submit" value="Remove"></input>
              <Popup
              contentStyle={contentStyle}
              open={this.state.openphonePopup}
              closeOnDocumentClick
               onClose={this.closeModalphonePopup}
              >
                  <Email
                   onCloseModdal={this.closeModalphonePopup}
                   onChangeCl={this.togglePhonePopup}
                   />
              </Popup>
            </div>
            <h4>Add Phone Number</h4>
            <hr></hr>
            <h3>Delivery Address</h3>
            <h3 className={this.state.address?"Grey-Text":"Display-none"}>No delivery addresses listed yet.</h3>
            <h4 onClick={this.openModalAddressPopup}>Add Delivery Address</h4>
                <Popup
                contentStyle={contentStyleAddress}
                open={this.state.openAddressPopup}
                closeOnDocumentClick
                onClose={this.closeModalAddressPopup}>
                    <Address
                    onCloseModdal={this.closeModalAddressPopup}
                    onChangeCl={this.toggleAddressPopup}/>
                </Popup>
            <hr></hr>
            <h3>Password</h3>
            <div class="Profile-Input">
              <p>*****************</p>
              <input class="Button" onClick={this.openModalPassword} type="submit" value="Change"></input>
              <Popup
               contentStyle={contentStylePassword}
               open={this.state.openPassword}
               closeOnDocumentClick
               onClose={this.closeModalPassword}
              >
               <Password
               onCloseModdal={this.closeModalPassword}/>
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
