import React, { Component } from 'react';
import Navigation from '../navigation';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </>
    );
  }
}

export default Layout;
