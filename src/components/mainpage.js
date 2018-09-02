import React, { Component } from 'react';
// import { LOGIN, HOME, USERS } from '../constants/constants';
import './App.css';



class MainPage extends Component {
    state = {
        username: 'asda',
        password: 'asdasd'
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

            <div>
                <div>
                    <h1> Welcome to Viddle. Please Sign In.</h1>
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
                    <div className="letterbox"><img src={"./components/LeftBox.jpg"} /></div>
                    <div className="letterbox"><img src={"./components/MiddleBox.jpg"} /></div>
                    <div className="letterbox"><img src={"./components/RightBox.jpg"} /></div>

                    <div><h3>Collect</h3></div>
                    <div><h3>Display</h3></div>
                    <div><h3>Share</h3></div>
                    <div>
                        <p>Collect all your favorite videos from your favorite media sites into on seamless user experience</p>
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

export default MainPage;
