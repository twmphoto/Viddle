import React, { Component } from 'react';
import './components/App.css';
import forms from './components/forms'
import updateforms from './components/updateforms'
import userpages from './components/userpages'
const HOME = 'HOME';
const LOGIN = 'LOGIN';
const USERPAGE = 'USERPAGE';

class App extends Component {

  state = {
    users: [],
    editingUser: {},
    editingUserTag: '',
    editingTag :{},
    isEditing: false
    path: 'HOME'
  }

  changePath = x =>{
    this.setState([path x])

  };

  /*Tenative User Object Design
user format=
{
  firstname: ,
  lastnames: ,
  username: , 
  password: ,
  vidcollection: [ videoID: , vidURL: , favorite: true/false
                  ]
}

*/

//Add users
addUser = User = {
  let newUser = [...this.state.users, /*What is this? */user];
  this.setState({ users: NewUsers});
}



//Black Box Delete Component, currently adapted for changing video collection
deleteVideo = index =>{
  let newVideoCollection = [
  ...this.state.users.vidcollection.slice(0, index/*What is this? */)
  ...this.state.users.vidcollection.slice(index +1),
];
this.setState({users.vidcollection: /*what is this?*/ newVideoCollection})

//Black Box Update Component, currently adapted for video collection
updateVideo = (index, ride) =>{
  let newVideoCollection = [
    ...this.state.users.vidcollection.slice(0, index), user, /*what is this? */
    ...this.state.users.vidcollection.slice(index + 1)
  ];
this.setState({
  users: newUsers, /*What should this be?*/
  isEditing: false
});
}

}
//If you give me the Index,  I will look up the object in this index
editOn = index => {
this.setState({
  editingVidCollection: this.state.users.vidcollection[index],
  editingIndex: index, /*what is this?*/
  //conditional rendering
isEditing: !this.state.isEditing

})

}


  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          In order for us to work together we need to make sure to not be on the same lines of code <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
