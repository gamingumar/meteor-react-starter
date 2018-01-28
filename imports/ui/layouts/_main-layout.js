import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  MainMenu
} from '/imports/ui/components/navigation';

export default class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <MainMenu />
        <div id="page">
          {children}
        </div>
      </div>
    );
  }
}
