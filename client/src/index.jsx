import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Gallery MaN gOd B</h1>
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById('app'));