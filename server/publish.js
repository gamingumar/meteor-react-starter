import { Meteor } from 'meteor/meteor';
import { Submission } from '../imports/api/submission/model';


Meteor.publish('allUsers', () => {
  // console.log('sub is: ', Submission.find().fetch());
  return Submission.find({});
});
