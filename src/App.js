import React, { Component } from 'react';
import './components/App.css';
// import forms from './components/forms';
// import updateforms from './components/updateforms';
import userspage from './components/userspage'
import { LOGIN, HOME, NEWUSERS } from './constants/constants';
import UsersPage from './components/userspage';
import MainPage from './components/mainpage';
import Signup from './components/signup';

class App extends Component {
  //Add Change 8/31 9:52AM
  state = {
    path: 'HOME',
    user: {
      username: 'asda',
      password: 'asdasd'
    },
    goodLogin: false
  }

  //   //Tenative User Object Design
  // user format=
  // {
  //   firstname: ,
  //   lastnames: ,
  //   username: , 
  //   password: ,
  //   vidcollection: [ videoID: , vidURL: , favorite: true/false
  //                   ]
  // }



  //Add Change 8/31 9:53AM
  login = mainPageUser => {

    console.log("Login clicked!");


    if (mainPageUser.username === this.state.user.username && mainPageUser.password === this.state.user.password) {
      this.setState({ goodLogin: true });
      this.changePath(LOGIN);
    } else {
      this.setState({ goodLogin: false });

      alert('Incorrect username/password')
    }

  }


  changePath = x => {
    this.setState({ path: x })
  };


  //App Change 8/31

  renderPath = path => {
    switch (path) {
      case HOME:
        return (
          <MainPage 
            login={this.login}
          />
        )

      case LOGIN:
        console.log('renderLogin')
        return (
          <UsersPage
            changePath={this.changePath}
            goodLogin={this.goodLogin}
          />
        )
      case NEWUSERS:
        return (
          <userspage
            username={this.state.user.username}

          />
        )
      default:
        return <h1>404 not found</h1>
    }
  }


  render() {
    return (

      <div className="container">
        <header className="App-header" >
          <img src={"./components/Main Header Image.jpg"} />
        </header>
        {/* App Change 8/31 */}
        {
          this.renderPath(this.state.path)
        }
      
      </div>
    );
  }
}

export default App;
