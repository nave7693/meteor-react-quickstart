// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';

const TITLE_AND_URL = new SimpleSchema({
  title: { type: String },
  url: { type: String },
});

export const insertLink = new ValidatedMethod({
  name: 'links.insert',
  validate: TITLE_AND_URL.validator({ clean: true, filter: false }),
  run( { title, url }) {
    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  }
});
