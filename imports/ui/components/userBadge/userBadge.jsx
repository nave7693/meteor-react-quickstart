import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

class UserBadge extends Component {
  constructor(props) {
    super(props);
    this.navLogIn = this.navLogIn.bind(this);
    this.navLogOut = this.navLogOut.bind(this);
  }

  navLogIn() {
    FlowRouter.go('App.signin');
  }

  navLogOut() {
    Meteor.logout();
  }

  render() {
    if (!this.props.currentUser) {
      return (
        <button onClick={this.navLogIn}>Log in</button>
      );
    } else {
      return (
        <div>
          <span>Welcome, {this.props.currentUser.username || this.props.currentUser.emails[0].address}</span>
          <button onClick={this.navLogOut}>Log out</button>
        </div>
      );
    }
  }
}

UserBadge.PropTypes = {
  currentUser: PropTypes.object,
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(UserBadge);