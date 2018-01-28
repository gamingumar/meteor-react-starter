import React from 'react';

const TaskPage = () => (
  <div>
    <div className="content">
      <div className="section">
        <div className="section-body">
          <div className="section-body-block content">
            <p>This project is a basic Meteor app and what it does is
            </p>
            <ol>
              <li>
                1. Click the submission link. Route pointing to /submission
              </li>
              <li>
                2. Save form data to Mongo DB
              </li>
              <li>
                3. On form submission, redirects to new page which simply shows inputted data reactively.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TaskPage;
