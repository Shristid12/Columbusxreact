import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Account from './Account/account.js';
import Profile from './Profile/profile.js';
import Home from './HomePage/home.js';
import About from './About/about.js';
import Popup from'./popup/popup.js';
const Routes =(props)=> {
        return(
                <Switch>
                    <Route  path='/account'  exact component = {Account}/>
                    <Route  path='/profile'  exact component = {Profile}/>
                    <Route  path='/' exact component = {Home}/>
                    <Route  path='/about' exact component = {About}/>
                    <Route  path='/popup' exact component = {Popup}/>
                </Switch>
        )

}

export default Routes;
