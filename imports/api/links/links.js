// Definition of the links collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Links = new Mongo.Collection('links');

// Deny all client-side updates since we will be using methods to manage this collection
Links.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// Schema setup
Links.schema = new SimpleSchema({
  _id: { type: String, regEx: SimpleSchema.RegEx.Id },
  title: { type: String },
  url: { type: String },
});
Links.attachSchema(Links.schema);

Links.publicFields = {
  title: 1,
  url: 1,
};