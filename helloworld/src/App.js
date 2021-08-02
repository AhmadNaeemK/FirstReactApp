import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';
import Welcome from './components/Welcome';
import { Component } from 'react';

function Hayee() {
  return(<div>Yahoo</div>)
}

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:5000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render(){
    return (
      <div className='App'>
        <p className="App-intro">{this.state.apiResponse}</p>
        <Hayee /> 
        <Hello />
        <Welcome />
      </div>
    )
  }

}

export default App;
