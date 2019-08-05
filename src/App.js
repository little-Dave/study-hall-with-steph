import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      triviaQuestions: []
    };
  }

  render() {
    return (
      <div className="App">
        <p>Hello World!</p>
      </div>
    );
  }
}

export default App;
