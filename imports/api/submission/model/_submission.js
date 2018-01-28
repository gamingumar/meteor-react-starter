import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Submission = new Mongo.Collection('Submission');

// schema
Submission.schema = new SimpleSchema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  age: {
    type: SimpleSchema.Integer
  },
  read: {
    type: Boolean
  }
});
