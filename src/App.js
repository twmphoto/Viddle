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

      console.log('bad')
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
        {/* <div>
          <div>
            {<h1> Welcome to Viddle. Please Sign In.</h1>}
          </div>
        </div>
        <form>
          <div className='form-group'>
            <input type='username' value={this.state.username} name="username" className="form-control" id="username" onChange={this.onChange} />
          </div>
          <div className='form-group'>
            <input type='password' value={this.state.password} name="password" className="form-control" id="password" onChange={this.onChange} />
          </div>
          <button onClick={this.login}>Login</button>

        </form>

        <h2 className="App-intro">
          Join Viddle today and be part of next gen social media phenomena
          </h2>

        <div className="banners">
          <div className="letterbox"><img src={"./components/LeftBox.jpg"} /></div>
          <div className="letterbox"><img src={"./components/MiddleBox.jpg"} /></div>
          <div className="letterbox"><img src={"./components/RightBox.jpg"} /></div>

          <div><h3>Collect</h3></div>
          <div><h3>Display</h3></div>
          <div><h3>Share</h3></div>
          <div>
            <p>Collect all your favorite videos from your favorite media sites into one
           seamless user experience</p>
          </div>
          <div>
            <p>Post your latest video find to your personal wall.</p>
          </div>
          <div>
            <p>Share your interests with the world, and meet new friends</p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
