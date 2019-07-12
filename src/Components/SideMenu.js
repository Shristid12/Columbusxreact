import React,{Component} from 'react';
import '../Styles/account.css';
import {Link} from 'react-router-dom';

class Sidemenu extends Component{
  constructor(props){
      super(props);
      this.state = { option: props.option};
  }

  render(){
  return (
    <div className="Account">
       <div>
           <p onClick={()=>this.setState({option:'1'})}><Link to='/app/account' style={{ textDecoration: 'none',color:'black' }}
              className={this.state.option=='1'?"SidemenuNotClicked":"Clicked"}>
               Account Setting</Link></p>
           <p onClick={()=>this.setState({option:'2'})}><Link to='/app/profile' style={{ textDecoration: 'none',color:'black' }}
              className={this.state.option=='2'?"SidemenuNotClicked":"Clicked"}>
               Profile Setting</Link></p>
           <p onClick={()=>this.setState({option:'4'})}><Link to='/app/project' style={{ textDecoration: 'none',color:'black' }}
              className={this.state.option=='4'?"SidemenuNotClicked":"Clicked"}>
               Post Project</Link></p>
           <p onClick={()=>this.setState({option:'3'})}><Link to='/app/payment' style={{ textDecoration: 'none',color:'black' }}
              className={this.state.option=='3'?"SidemenuNotClicked":"Clicked"}>
               Payment Settings</Link></p>
           <p>My Transactions</p>
           <p>Privacy Setting</p>
       </div>
    </div>
  );
}
}
export default Sidemenu;
