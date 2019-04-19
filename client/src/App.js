import React, { Component } from "react";
import Display from "./components/display/Display.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };
  resetHandler = event => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  strikeHandler = event => {
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } else {
      this.resetHandler(event);
    }
  };
  ballHandler = event => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    } else {
      this.resetHandler(event);
    }
  
  };
  foulHandler = event => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } 
  };
  render() {
    return (
      <div className="App">
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard
          strikeCount={this.strikeHandler}
          ballCount={this.ballHandler}
          hitCount={this.resetHandler}
          foulCount = {this.foulHandler}
        />
      </div>
    );
  }
}

export default App;
