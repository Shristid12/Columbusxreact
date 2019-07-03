import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Account from '../Containers/account.js';
import Profile from '../Containers/profile.js';
import Home from '../Containers/home.js';
import About from '../Containers/about.js';
import Legal from '../Containers/legal.js';
import Payment from'../Containers/payment.js';
import ValueChain from '../Containers/valuechain.js';
import Login from '../Containers/login.js';
import SignUp from '../Containers/SignUp.js';
import Front from'../Containers/FrontPage.js';

const Routes =(props)=> {
        return(
                <Switch>
                    <Route  path='/account'  exact component = {Account}/>
                    <Route  path='/profile'  exact component = {Profile}/>
                    <Route  path='/payment'  exact component = {Payment}/>
                    <Route  path='/' exact component = {Home}/>
                    <Route  path='/about' exact component = {About}/>
                    <Route  path='/legal' exact component = {Legal}/>
                    <Route  path='/valuechain' exact component ={ValueChain}/>
                    <Route  path='/login' exact component ={Login}/>
                    <Route  path='/signup' exact component ={SignUp}/>
                    <Route  path='/front' exact component ={Front}/>
                </Switch>
        )

}

export default Routes;
