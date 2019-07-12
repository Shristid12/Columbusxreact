import React,{Component} from 'react';
import '../Styles/project.css';
import Nav from '../Components/nav.js';
import Sidemenu from'../Components/SideMenu.js';

class Project extends Component{
  constructor (props) {
    super(props);
    this.state = {
                  page:'settings',
                  optionSideMenu:'4',
                };
  }
  render(){
  return (
    <div className="project">
      <Nav page={this.state.page}/>
      <div class="Basic">
        <div class="Menu">
           <Sidemenu option={this.state.optionSideMenu}/>
        </div>
         <div class="Content">
            <div class="Project-PinkBar">
               <h1>Post Your Project</h1>
               <br></br>
               <h4>Conatct skilled resources within few minutes. View profiles, portfolios and chat with them.</h4>
               <p>Post is free</p>
            </div>
        </div>
      </div>
    </div>
  );
}
}

export default Project;
