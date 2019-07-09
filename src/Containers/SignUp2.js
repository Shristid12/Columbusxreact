import React,{Component} from 'react';
import '../Styles/login.css';
import RegisterSection1 from'../Components/registerSection1';
import RegisterSection2 from'../Components/registerSection2';
import RegisterSection3 from'../Components/registerSection3';
import RegisterSection4 from'../Components/registerSection4';
import {Link} from 'react-router-dom';

class SignUp2 extends Component{
  constructor(props){
    super(props);
    this.state = { buttonOption1:'employee',
                   buttonOption2:'superAdmin'
                };
    this.changeClassOne = this.changeClassOne.bind(this);
    this.changeClassTwo = this.changeClassTwo.bind(this);
    this.changeClassThree = this.changeClassThree.bind(this);
    this.changeClassFour = this.changeClassFour.bind(this);
    this.changeClassFive = this.changeClassFive.bind(this);
  }
  changeClassOne (){
    this.setState({ buttonOption1: 'employee' })
  }
  changeClassTwo (){
    this.setState({ buttonOption1: 'individual' })
  }
  changeClassThree (){
    this.setState({ buttonOption1: 'company' })
  }
  changeClassFour (){
    this.setState({ buttonOption2: 'superAdmin' })
  }
  changeClassFive (){
    this.setState({ buttonOption2: 'Admin' })
  }
  render(){
  return (
    <div className="SignUp">
         <p class="SignUp2-Message"><span class="Cx">Complete Registration:</span> In One More Step.</p>
         <div class="Signup2-RegisterOption">
            <div class="SignUp2-Buttons">
               <h3 class="Grey-Text1">Register As An</h3>
               <input className={this.state.buttonOption1==='employee'?"SignUp1-ButtonOne":"SignUp2-ButtonOne"}
                onClick={this.changeClassOne}
                type="submit" value="Employee"></input>
               <input className={this.state.buttonOption1==='individual'?"SignUp1-ButtonOne":"SignUp2-ButtonOne"}
                onClick={this.changeClassTwo}
                type="submit" value="Individual"></input>
               <input className={this.state.buttonOption1==='company'?"SignUp1-ButtonOne":"SignUp2-ButtonOne"}
                onClick={this.changeClassThree}
                type="submit" value="Company"></input>
            </div>
            <div class="SignUp2-Buttons">
               <h3 class="Grey-Text1">Role</h3>
               <input className={this.state.buttonOption2==='superAdmin'?"SignUp1-ButtonOne":"SignUp2-ButtonOne"}
                onClick={this.changeClassFour}
                type="submit" value="Super Admin"></input>
               <input className={this.state.buttonOption1!=='employee'?"Display-none":
               this.state.buttonOption2==='Admin'?"SignUp1-ButtonOne":"SignUp2-ButtonOne"}
                onClick={this.changeClassFive}
                type="submit" value="Admin"></input>
            </div>
         </div>
         {this.state.buttonOption1==='employee'&&this.state.buttonOption2==='Admin'?<RegisterSection1/>:
         this.state.buttonOption1==='employee'?<RegisterSection2/>:this.state.buttonOption1==='individual'?<RegisterSection3/>:<RegisterSection4/>}
         <div class="Register-Button2">
            <div>
            <p><Link to='/auth/signup' style={{textDecoration:'none',color:'black'}}>Back</Link></p>
            </div>
            <div class="Register-ButtonSection">
              <input class="LoginButton" value="Register"></input>
               <p class="SignUpOption">Already a member ? <Link to='/auth/login'
               style={{textDecoration:'none',color:'black'}}>LogIn</Link></p>
            </div>
         </div>
    </div>
  );
}
}
export default SignUp2;
