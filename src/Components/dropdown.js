import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import React, { Component } from 'react';
import '../Styles/profile.css';
import Arrow from'../assets/arrow.png';
class DropDown extends Component {

  render() {
    const menu = (
      <Menu
        style={{ width: 110 }}>
        <MenuItem key="1">Edit</MenuItem>
        <MenuItem key="2">Delete</MenuItem>
      </Menu>
    );

    return (
      <Dropdown
       class="Profile-DropDown"
        trigger={['click']}
        overlay={menu}
        animation="slide-up"
      >
        <div role="button"
        style={{
          width:"100%",
          background: 'white',
          border: '1px solid black',
          height: '30px',
          padding: '1%',
          display:'flex',
          }}
        class="Profile-DropDown">
         <p class="Dropdown-Text">Options</p>
         <img class="Dropdown-ArrowIcon" src={Arrow}></img>
        </div>
      </Dropdown>
    );
  }
}

export default DropDown;
