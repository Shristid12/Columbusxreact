import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Account from '../Containers/account.js';
import Profile from '../Containers/profile.js';
import About from '../Containers/about.js';
import Legal from '../Containers/legal.js';
import Payment from'../Containers/payment.js';
import ValueChain from '../Containers/valuechain.js';
import Front from'../Containers/FrontPage.js';

export default class HomeRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Switch>
          <Route path={`${match.url}/account`} component={Account} />
          <Route path={`${match.url}/profile`} component={Profile} />
          <Route path={`${match.url}/legal`} component={Legal} />
          <Route path={`${match.url}/about`} component={About} />
          <Route path={`${match.url}/payment`} component={Payment} />
          <Route path={`${match.url}/valueChain`} component={ValueChain} />
          <Route path={`${match.url}/front`} component={Front} />
        </Switch>
      </React.Fragment>
    );
  }
}

HomeRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
