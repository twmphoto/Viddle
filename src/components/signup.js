import React, { Component } from 'react';
import './App.css';

class Signup extends Component{
state = {
    firstName:'',
    lastName:'',
    userName:'',
    password:''
    }


onSubmit = e =>{
e.preventDefault();

this.props.addUser(this.state)

this.setState({
    firstName:'',
    lastName: '',
    userName:'',
    password:'',
})
}

onFirstNameChange = e => {
    this.setState({
        firstName: e.target.value
    
    })
}

onLastNameChange = e =>{
    this.setState({
        lastName: e.target.value

    })
}

onUserNameChange = e =>{
    this.setState({
        lastName: e.target.value

    })
}


onPasswordChange = e =>{
    this.setState({
        password: e.target.value

    })
}

render() {
    return (

        <form onSubmit = {this.onSubmit}>
            <div><h3>Sign Up for Viddle Today!</h3></div>
            <div className="signup">
                <label>First Name</label>
                <input type = "text" className = "form-control" onChange=
            {this.onFirstNameChange} value ={this.state.firstName} placeholder ="Enter first name" />
            </div>
            <div className="signup">
                <label>last Name</label>
                <input type = "text" className = "form-control" onChange=
                {this.onLastNameChange} value ={this.state.lastName} placeholder ="Enter last name" />
            </div>
            <div className="signup">
                <label>User</label>
                <input type = "text" className = "form-control" onChange=
                {this.onUserNameChange} value ={this.state.userName} placeholder ="Enter a username" />
            </div>
            <div className="signup">
                <label>Password</label>
                <input type = "text" className = "form-control" onChange=
                {this.onPasswordChange} value ={this.state.password} placeholder ="Enter your password" />
            </div> 
            <button type="submit" value="Submit">Submit</button>               
        </form>

    )
    }
};

export default Signup;