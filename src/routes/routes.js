import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Account from '../Containers/account.js';
import Profile from '../Containers/profile.js';
import Home from '../Containers/home.js';
import About from '../Containers/about.js';
import Payment from'../Containers/payment.js';
const Routes =(props)=> {
        return(
                <Switch>
                    <Route  path='/account'  exact component = {Account}/>
                    <Route  path='/profile'  exact component = {Profile}/>
                    <Route  path='/payment'  exact component = {Payment}/>
                    <Route  path='/' exact component = {Home}/>
                    <Route  path='/about' exact component = {About}/>
                </Switch>
        )

}

export default Routes;
