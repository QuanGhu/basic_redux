import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { changeTextValue } from './redux/action/text'

class App extends Component {
  changeThisText = (e) => {
    this.props.changeText(e.target.value)
  }
  render() {
    console.log(this.props.text)
    return (
      <div className="App">
        <input type="text" onChange={this.changeThisText.bind(this)}/>
        <p>{this.props.text ? this.props.text.data : null }</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text : state.text
})

const mapDispatchToProps = dispatch => {
  return {
      changeText : data => dispatch(changeTextValue(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
