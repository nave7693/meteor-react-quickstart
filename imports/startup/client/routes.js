import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import React from 'react';
import { mount } from 'react-mounter';

// Import needed templates
import UserBadge from '../../ui/components/userBadge/userBadge.jsx';
import Body from '../../ui/layouts/body/body.jsx';
import Home from '../../ui/pages/home/home.jsx';
import NotFound from '../../ui/pages/not-found/not-found.jsx';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    mount(Body, { header: () => <UserBadge />, contentPage: () => <Home /> });
  },
});

FlowRouter.route('*', {
  action() {
    mount(Body, { header: () => <UserBadge />, contentPage: () => <NotFound /> });
  },
});
