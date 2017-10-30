import { AccountsTemplates } from 'meteor/useraccounts:core';
import React from 'react';
import Body from '../../ui/layouts/body/body.jsx';
import UserBadge from '../../ui/components/userBadge/userBadge.jsx';

function onLogout() {
  Meteor.defer(() => {
    FlowRouter.reload('App.home');
  });
}

/**
 * The useraccounts package must be configured for both client and server to work properly.
 * See the Guide for reference (https://github.com/meteor-useraccounts/core/blob/master/Guide.md)
 */

// core config
AccountsTemplates.configure({
  // Behavior
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  focusFirstInput: true,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: false,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

  // Privacy Policy and Terms of Use
  privacyUrl: 'privacy',
  termsUrl: 'terms-of-use',

  // Redirects
  homeRoutePath: '/home',
  redirectTimeout: 4000,

  // Hooks
  onLogoutHook: onLogout,
  //onSubmitHook: mySubmitFunc,
  //preSignUpHook: myPreSubmitFunc,
  //postSignUpHook: myPostSubmitFunc,

  // Texts
  texts: {
    button: {
        signUp: "Register Now!"
    },
    socialSignUp: "Register",
    socialIcons: {
        "meteor-developer": "fa fa-rocket"
    },
    title: {
        forgotPwd: "Recover Your Password"
    },
  },
});
    
// flow-routing
AccountsTemplates.configure({
  defaultLayoutType: 'react',
  defaultLayout: Body,
  defaultContentRegion: 'contentPage',
  defaultLayoutRegions: { header: () => <UserBadge /> },
});

AccountsTemplates.configureRoute('signIn', {
  name: 'App.signin',
  path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'App.join',
  path: '/join',
});

//AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
  name: 'App.resetPwd',
  path: '/reset-password',
});
