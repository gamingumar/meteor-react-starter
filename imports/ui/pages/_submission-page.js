import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  age: '',
  read: 0
};

class SubmissionPage extends Component {
  state = INITIAL_STATE;

  /**
   * Submit Form
   */
  submitUser = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { firstname, lastname, age, read } = this.state;

    console.log('sending state', this.state);
    try {
      Meteor.call('addUser', {
        firstname,
        lastname,
        age: +age,
        read: (read) ? true : false
      }, (error, response) => {
        console.log('got response: ', response);
        if (!error) {
          alert('Done');
          this.setState(INITIAL_STATE);
          this.props.router.push(`/view/${response}`);
        } else {
          alert('oops, validation failed');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Hanle Input Change to update react state
   */
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div id="page-header">
          <div className="content">
            <div className="content-block">
              <div className="page-title"><h1>Form</h1></div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <div className="section-body">
              <div className="section-body-block content">
                <form onSubmit={this.submitUser}>
                  <div className="fieldset">
                    <div className="fieldset-content">
                      <input
                        name="firstname"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        placeholder="First Name*"
                      />
                    </div>
                  </div>
                  <div className="fieldset">
                    <div className="fieldset-content">
                      <input
                        name="lastname"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="fieldset">
                    <div className="fieldset-content">
                      <input
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  <div className="fieldset">
                    <label className="checkbox">
                      <input
                        name="read"
                        type="checkbox"
                        checked={this.state.read}
                        value={this.state.read}
                        onChange={this.handleInputChange}
                      />
                      <span className="checkbox-toggle"></span>
                      <p className="checkbox-inner-label">I have read the readme!</p>
                    </label>
                  </div>
                  <div className="popup-body-block content">
                    <button type="submit" className="button button-green button-fullwidth">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmissionPage;
