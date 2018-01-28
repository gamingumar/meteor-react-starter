import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

const Users = new Mongo.Collection('Submission');

class ViewPage extends TrackerReact(Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        allUsers: Meteor.subscribe('allUsers')
      },
      userId: ''
    };

    // console.log('subscription', this.state.subscription.allUsers);
  }

  newUser() {
    console.log('in new user..');
    return Users.findOne({ _id: this.state.userId });
  }

  componentWillMount() {
    // const user = Users.find({ firstname: '1' }).fetch();
    console.log('c did mounted', this.props.params.id);
    this.setState({ userId: this.props.params.id });
  }

  componentWillUnmount() {
	  this.state.subscription.allUsers.stop();
  }
  // users() {
  //   return Users.find().fetch();
  // }

  render() {
    const user = this.newUser();
    if (!user) {
      return <p>no record found</p>;
    }
    // console.log('from users: ', this.users());
    return (
      <div>
        <div id="page-header">
          <div className="content">
            <div className="content-block">
              <div className="page-title"><h1>User Data from DB</h1></div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <div className="section-body">
              <div className="section-body-block content">
                <div className="fieldset">
                  <div className="fieldset-content">
                    <p>First Name: {user.firstname}</p>
                  </div>
                </div>
                <div className="fieldset">
                  <div className="fieldset-content">
                    <p>Last Name: {user.lastname}</p>
                  </div>
                </div>
                <div className="fieldset">
                  <div className="fieldset-content">
                    <p>Age: {user.age}</p>
                  </div>
                </div>
                <div className="fieldset">
                  <p>Readme: {user.read ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPage;
