import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignUp2 from '../Containers/SignUp2';
import SignIn from '../Containers/login';
import SignUp from '../Containers/SignUp';
import Welcome from '../Containers/home';

export default class AuthRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact path={`${match.url}/`} component={Welcome} />
        <Route path={`${match.url}/signin`} component={SignIn} />
        <Route path={`${match.url}/signup`} component={SignUp} />
        <Route path={`${match.url}/signuptwo`} component={SignUp2} />
      </>
    );
  }
}

AuthRouter.propTypes = {
  match: PropTypes.string.isRequired,
};
