import React, { Component } from 'react';
import { LOGIN, HOME, NEWUSERS } from '../constants/constants';
// import user_content from './user_content';
// import ReactPlayer from 'react-player';
import './userstyles.css';




class UsersPage extends Component {
  state = {
    newurl:[],  
    urls: ['https://youtu.be/tpUt4KGPZTY'],

  }


  NewUrlLink = url =>{
    let newLink = [...this.state.urls, url]
    this.setState({
      urls: newLink
    })
  }

  onUrlChange = e => {
    this.setState({
      urls:''
    })
  }


  formSubmit = e => {
    e.preventDefault();

    // object { email, username, password }
    this.state.urls;

    this.setState({
      urls:[],
    })
  }






  render() {
    return (
      <div className='container'>
              {
          this.props.goodLogin && <h1>Hello! {this.props.username}</h1>
        }
        <form onSubmit={this.formSubmit}>
          <div className='form-group'>
            <label htmlFor="userUrl">Paste the URL below</label>
            <input type="text" value={this.urls} onChange={this.onUrlChange} className="form-control" id='userUrl' placeholder='URL' />
          </div>
          <button type='submit' className="btn btn-dark">Submit</button>
        </form>
      </div>

      
    );
  }
}



        //{/* {this.state.urls.map(url => <ReactPlayer url={url} />)}




export default UsersPage;
