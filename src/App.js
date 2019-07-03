import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import NewsChannel from './components/NewsChannels'
import National from './components/National'
import International from './components/International'
class App extends Component {
  componentDidMount() {
    // console.log(this.props)
  }
  render() {

    return (
      <Router>
        <div className="background"></div>
        {/* <NewsChannel></NewsChannel> */}
        <Route exact path="/" component={NewsChannel} />
        <Route path="/International" component={International} />
        <Route path="/National" component={National} />
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    IndianChannels: state.IndianChannels
  }
}
export default connect(mapStateToProps)(App);
