// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Links } from './links.js';
import { insertLink } from './methods.js';

if (Meteor.isServer) {
  describe('links methods', function () {
    beforeEach(function () {
      Links.remove({});
    });

    it('can add a new link', function () {
      insertLink.call({title: 'meteor.com', url: 'https://www.meteor.com'});

      assert.equal(Links.find().count(), 1);
    });
  });
}
