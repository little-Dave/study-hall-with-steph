import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import CardsContainer from './components/CardsContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      triviaQuestions: []
    };
  }

  componentDidMount() {
    fetch('http://jservice.io/api/clues')
      .then(response => response.json())
      .then(triviaQuestions => this.setState({ triviaQuestions }));
  }

  render() {


    return (
      <div className="App">
        <CardsContainer questions={ this.state.triviaQuestions }/>
        <Navbar />


      </div>

    );
  }
}

export default App;
