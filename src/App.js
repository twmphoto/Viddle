import React, { Component } from 'react';
import './components/App.css';
import forms from './components/forms';
import updateforms from './components/updateforms';
import userspage from './components/userspage'
import { LOGIN, HOME, USERS } from './constants/constants';


class App extends Component {
//Add Change 8/31 9:52AM
state = {
    path: HOME,
    user: {
      username: 'abc',
      password: 'abc'
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
login = user => {
  if (user.username === this.state.user.username && user.password === this.state.user.password){
      this.setState({ goodLogin: true});
  } else {
    this.setState({ goodLogin: false});
  }
}

// buttonClicked = () => {
//   this.props.login(this.state)
//   this.props.changePath(DASHBOARD)
// }


  //Login/Create Account 
  // buttonClicked = () => {
  //   this.props.login(this.state)
  //   this.props.changePath(USERPAGE)
  // }




  changePath = x => {
    this.setState({ path: x })

  };


  /** 
  //Tenative User Object Design
  user format =
    {
      firstname: ,
      lastnames: ,
      username: ,
      password: ,
      vidcollection: [videoID: , vidURL: , favorite: true / false
      ]
    }
  */

  //Add users
  // addUser = User => {
  //   newUser = [...this.state.users, user];
  //   this.setState({ users: NewUsers });
  // }


  /**
  //Black Box Delete Component, currently adapted for changing video collection
  // deleteVideo = index => {
  //   let newVideoCollection = [
  //     ...this.state.users.vidcollection.slice(0, index/*What is this?) */
  // ...this.state.users.vidcollection.slice(index + 1),
  //   ];
  //   this.setState({ users.vidcollection: /*what is this?*/ newVideoCollection })

    //Black Box Update Component, currently adapted for video collection
  //   updateVideo = (index, ride) => {
  //     let newVideoCollection = [
  //       ...this.state.users.vidcollection.slice(0, index), user, /*what is this? */
  //       ...this.state.users.vidcollection.slice(index + 1)
  //     ];
  //     this.setState({
  //       users: newUsers, /*What should this be?*/
  //       isEditing: false
  //     });
  //   }

  // }
  //If you give me the Index,  I will look up the object in this index
  // editOn = index => {
  //   this.setState({
  //     editingVidCollection: this.state.users.vidcollection[index],
  //     editingIndex: index, /*what is this?*/
  //     //conditional rendering
  //     isEditing: !this.state.isEditing

  //   })

  // }

  //App Change 8/31
  
        renderPath = path => {
          switch (path) {
             case HOME:
             return <h1>This is my home Page</h1>
      
            case LOGIN:
               return (
                <loginScreen
                  changePath = {this.changePath}
                  login = {this.login} />
              )
            case USERS:
               return (
                <userspage
                  username = {this.state.user.username}
                  goodLogin = {this.state.goodLogin}
                  />
              )
              default:
                return<h1>404 not found</h1>
            }
          }
      


  render() {
    return (
      <div className="container">
        <header className="App-header">
          <img src={"./components/photo.jpg"} />
        </header>
        {/* App Change 8/31 */}
      <div>
        <div>
        </div>
          {this.renderPath(this.state.path)}  
        </div>  
      <div>
        <input value={this.state.user.username}
           onChange={e => { this.setState({ username: e.target.value }) }} />
         <input value={this.state.user.password}
          onChange={e => { this.setState({ password: e.target.value }) }} />
        <button onClick={this.buttonClicked}>Login</button>
      </div> 
          
        <p className="App-intro"><h2>
          Join Viddle today and be part of next gen social media phenomena
          </h2>
        </p>
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
    </div>
  </div>
    );
  }  
}

export default App;
