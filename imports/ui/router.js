import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { MainLayout } from '/imports/ui/layouts';
import { TaskPage, SubmissionPage, ViewPage } from '/imports/ui/pages';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={TaskPage} />
        <Route path="/submission" component={SubmissionPage} />
        <Route path="/view/:id" component={ViewPage} />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
