// TODO: Write save methods with validation
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Submission } from '../model';

Meteor.methods({
  addUser(user) {
    console.log('inserting into db');
    console.log(user);
    
    // validating
    check(user, {
      firstname: String,
      lastname: String,
      age: Number,
      read: Boolean
    });

    // TODO - CHECK HERE
    const _id = Submission.insert(user);
    console.log('new id is: ', _id);
    return _id;
  }
});
