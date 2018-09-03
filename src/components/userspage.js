import React, { Component } from 'react';
import { LOGIN, HOME, NEWUSERS } from '../constants/constants';
import ReactPlayer from 'react-player';
import { version } from '../../package.json'








class UsersPage extends Component {
  state = {
    // newlinks:[],  
    links: [],
    url: '',
    isValid: false

  }



  onUrlChange = e => {
    this.setState({
      url: e.target.value
    })
  }


  formSubmit = e => {
    e.preventDefault();

    // object { email, username, password }
    let newLink = [...this.state.links, this.state.url]
    this.setState({
      links: newLink,
      url: ''
    })
  }





  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>This is our user page</h1>
        </div>
        <form onSubmit={this.formSubmit}>
          <div className='form-group'>
            <label htmlFor="userUrl">Paste the URL below</label>
            <input type="text" value={this.state.url} onChange={this.onUrlChange} className="form-control" id='userUrl' placeholder='URL' />
          </div>
          <button type='submit' className="btn btn-dark">Submit</button>
        </form>
        <div className='row'>
          <div className="col">
            <div className='player-wrapper'>
              {this.state.links.map(url => (
                <ReactPlayer
                  className='react-player'
                  url={url}
                  width='25%'
                  height='25%'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}








export default UsersPage;

