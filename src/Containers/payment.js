import React,{Component} from 'react';
import '../Styles/payment.css';
import Popup from 'reactjs-popup';
import SideMenu from '../Components/SideMenu.js';
import Nav from '../Components/nav.js';
import {Link} from 'react-router-dom';
import PaymentSavedCards from '../Components/PaymentSavedCards.js';
import Checkbox from '@material-ui/core/Checkbox';
import BankAccount from'../Components/bankaccount.js';

class Payment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      checkedA: true,
      checkedG: true,
      openBank: false,
      option:'3'};
  this.openModalBankPopup = this.openModalBankPopup.bind(this)
  this.closeModalBankPopup = this.closeModalBankPopup.bind(this)
}
  openModalBankPopup (){
    this.setState({ openBank: true })
  }
  closeModalBankPopup () {
    this.setState({ openBank: false })
  }
  render(){
    const contentStyle = {
       width: "15%",
       padding: "1%"
     };
  return (
    <div className="Payment">
    <Nav/>
      <div class="Basic">
         <div class="Menu">
           <SideMenu option={this.state.option}/>
         </div>
         <div class="Content">
            <div class="Payment-SavedCards">
                <h3>Saved Cards</h3>
                <input class="Button" type="submit" value="Add New"></input>
            </div>
            <PaymentSavedCards/>
            <PaymentSavedCards/>
            <PaymentSavedCards/>
            <hr></hr>
            <h3 class="Grey-Text-2">Use this bank account to send money</h3>
            <div class="payment">
               <div class="payment_checkbox">
                <Checkbox
                   defaultChecked
                   color="default"
                   value="checkedG"
                   inputProps={{
                     'aria-label': 'checkbox with default color',
                   }}/>
                </div>
                <div class="payment_info">
                  <PaymentSavedCards/>
                </div>
            </div>
            <h4 onClick={this.openModalBankPopup}>Link Another Bank Account</h4>
            <Popup
             contentStyle={contentStyle}
             open={this.state.openBank}
             closeOnDocumentClick
             onClose={this.closeModalBankPopup}
            >
              <BankAccount
               onCloseModdal={this.closeModalBankPopup}/>
           </Popup>
            <hr></hr>
            <h3 class="Grey-Text-2">Use this bank account to receive money</h3>
            <div class="payment">
               <div class="payment_checkbox">
                <Checkbox
                   defaultChecked
                   color="default"
                   value="checkedA"
                   inputProps={{
                     'aria-label': 'checkbox with default color',
                   }}/>
                </div>
                <div class="payment_info">
                  <PaymentSavedCards/>
                </div>
            </div>
            <h4 onClick={this.openModalBankPopup}>Link Another Bank Account</h4>
            <Popup
             contentStyle={contentStyle}
             open={this.state.openBank}
             closeOnDocumentClick
             onClose={this.closeModalBankPopup}
            >
              <BankAccount
               onCloseModdal={this.closeModalBankPopup}/>
           </Popup>
         </div>
      </div>
    </div>
  );
}
}
export default Payment;
