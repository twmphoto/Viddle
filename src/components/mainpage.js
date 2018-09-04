import React, { Component } from 'react';
// import { LOGIN, HOME, USERS } from '../constants/constants';
import './App.css';
import Signup from './signup'



class MainPage extends Component {
    state = {
        username: 'asd',
        password: 'asd'
    }

   
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitLogin = e => {
        e.preventDefault();

        this.props.login(this.state);
    }

    render() {
        return (

            <div className = "overdiv">
                <div className = "headerOne">
                    <h1> Welcome to Viddle</h1>
                </div>
                <a href="#modalWindow" ><h5>Sign-up for an Account</h5></a>
                <div id="modalWindow" class="modalBox">
                <div>
                <a class="closeWindow" href="#close">X</a>
                <Signup />
                <div></div>
                
                </div>
                </div>

                <form onSubmit={this.submitLogin}>
                 
                    <div className='form-group'>
                        <input type='username' value={this.state.username} name="username" className="form-control" id="username" onChange={this.onChange} />
                    </div>
                    <div className='form-group'>
                        <input type='password' value={this.state.password} name="password" className="form-control" id="password" onChange={this.onChange} />
                    </div>
                    <button type="submit" value="Submit">Login</button>
                </form>


                <h2 className="App-intro">Join Viddle today and be part of next gen social media phenomena </h2>

                <div className="banners">
                    <div ><img className="letterbox" src={"./components/LeftBox.jpg"} /></div>
                    <div ><img className="letterbox" src={"./components/MiddleBox.jpg"} /></div>
                    <div ><img className="letterbox" src={"./components/RightBox.jpg"} /></div>

                    <div><h3>Collect</h3></div>
                    <div><h3>Display</h3></div>
                    <div><h3>Share</h3></div>
                    <div className ="infobox">
                        <p>Collect all your favorite videos from your favorite media sites into on seamless user experience</p>
                    </div>
                    <div className ="infobox">
                        <p>Post your latest video find to your personal wall, and customize it for your own</p>
                    </div>
                    <div className ="infobox">
                        <p>Share your interests with the world, and meet new friends through your media channel</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainPage;
