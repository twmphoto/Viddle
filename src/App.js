import React, { Component } from 'react';
import './components/App.css';
// import forms from './components/forms'
// import updateforms from './components/updateforms'
// import userpages from './components/userpages'
// import {LOGIN, USERPAGE} from './constants'


class App extends Component {

//   state = {
//     users: [],
//     editingUser: {},
//     editingUserTag: '',
//     editingTag :{},
//     isEditing: false
//     path: 'HOME'
//   }

//   changePath = x =>{
//     this.setState([path x])

//   };

//   /*Tenative User Object Design
// user format=
// {
//   firstname: ,
//   lastnames: ,
//   username: , 
//   password: ,
//   vidcollection: [ videoID: , vidURL: , favorite: true/false
//                   ]
// }

// */

// //Login/Create Account 
// buttonClicked = ()=>{
//   this.props.login(this.state)
//   this.props.changePath(USERPAGE)
// }



// //Add users
// addUser = User = {
//   let newUser = [...this.state.users, /*What is this? */user];
//   this.setState({ users: NewUsers});
// }

//   }

//   changePath = x =>{
//     this.setState([path x])

//   };

//   /*Tenative User Object Design
// user format=
// {
//   firstname: ,
//   lastnames: ,
//   username: , 
//   password: ,
//   vidcollection: [ videoID: , vidURL: , favorite: true/false
//                   ]
// }

// */

// //Add users
// addUser = User = {
//   let newUser = [...this.state.users, /*What is this? */user];
//   this.setState({ users: NewUsers});
// }



// //Black Box Delete Component, currently adapted for changing video collection
// deleteVideo = index =>{
//   let newVideoCollection = [
//   ...this.state.users.vidcollection.slice(0, index/*What is this? */)
//   ...this.state.users.vidcollection.slice(index +1),
// ];
// this.setState({users.vidcollection: /*what is this?*/ newVideoCollection})

// //Black Box Update Component, currently adapted for video collection
// updateVideo = (index, ride) =>{
//   let newVideoCollection = [
//     ...this.state.users.vidcollection.slice(0, index), user, /*what is this? */
//     ...this.state.users.vidcollection.slice(index + 1)
//   ];
// this.setState({
//   users: newUsers, /*What should this be?*/
//   isEditing: false
// });
// }

// }
// //If you give me the Index,  I will look up the object in this index
// editOn = index => {
// this.setState({
//   editingVidCollection: this.state.users.vidcollection[index],
//   editingIndex: index, /*what is this?*/
//   //conditional rendering
// isEditing: !this.state.isEditing

// })

// }


  render() {
    return (
      <div className="container">
        <header className="App-header">
          <img src ={"./components/photo.jpg"}/>
        </header>
        {/* <div>
          <input value = {this.state.user.username}
            onChange = {e=> {this.setState({username: e.target.value}) }} />
          <input value = {this.state.user.password}
            onChange = {e=> {this.setState({password: e.target.value}) }} />
          <button onClick={this.buttonClicked}>Login</button>
        </div> */}
        <p className="App-intro"><h2>
          Join Viddle today and be part of next gen social media phenomena
          </h2>
        </p>
        <div className ="banners">
        <div className = "letterbox"><img src ={"./components/LeftBox.jpg"} />
      Collect
        </div>
        
        <div className = "letterbox"><img src ={"./components/MiddleBox.jpg"}/></div>
        <div className = "letterbox"><img src ={"./components/RightBox.jpg"}/></div>
        <div><h3>Collect</h3></div>
    
        <div><h3>Display</h3></div>
        <div><h3>Share</h3></div>
        <div><p>Collect all your favorite videos from your favorite media sites into one
          seamless user experience</p></div>
          <div><p>Post your latest video find to your personal wall.</p></div>
          <div><p>Share your interests with the world, and meet new friends</p></div>
            
        </div>
      </div>
      
    

      

    );
  }
}

export default App;
