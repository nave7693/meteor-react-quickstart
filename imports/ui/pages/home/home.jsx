import React, { Component } from 'react';

import Hello from '../../components/hello/hello.jsx';
import Info from '../../components/info/info.jsx';

class Home extends Component {
  render() {
    return <div>
      <Hello />
      <Info />
    </div>
  }
}

export default Home;