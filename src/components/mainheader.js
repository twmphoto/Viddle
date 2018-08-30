import React, {Component } from 'react';
import {APP, USERPAGE,LOGIN }




//USER PASSWORD VERIFICATION
login = user => {
if( user.username === this.state.user.username && user.password === this.state.user.password){
        this.setState({ goodlogin: true});
    } else {
        this.setState({ goodLogin: false});
    }

}
//PATH CHOICE
changePath = x => {
    this.setState({ path: x})
}

renderPath = path => {
    switch(path){ 
        case HOME: 
        case LOGIN:
            return (
                <loginScreen 
                changePath = {this.changePath}
                login = {this.login} />
            ) 
        case DASHBOARD:
            return (
                <userspage
            )
    }

}