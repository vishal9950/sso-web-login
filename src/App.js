import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  onClick = () => {
    console.log(document.cookie);
    alert(document.cookie);
  }

  getCookie = (name) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  onClick1 = () => {
    const token = this.getCookie('token');
    console.log(token);
    const options = {
      method: 'GET',
      url: '/restricted',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(options).then((res) => {
      const { message } = res.data;
      alert(message);
    }).catch(err => alert(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.onClick()}>Test set cookies</button>
          <button onClick={() => this.onClick1()}>Test authorized response</button>
        </header>
      </div>
    );
  }
}

export default App;
