
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


  // NewUrlLink = links =>{
  //   let newLink = [...this.state.links, links]
  //   this.setState({
  //     links: newLink
  //   })
  // }

  onUrlChange = e => {
    this.setState({
      url: e.target.value
    })
  }

  addtoLinks = links => {
  let newLink = [...this.state.url, links];
  this.setState({links: newLink})

  }

  formSubmit = e => {
    e.preventDefault();

    // object { email, username, password }
    let newLink = [...this.state.url, this.state.url]
    this.setState({
      links: newLink,
      url: ''
    })
  }





  render() {
    return (
      <div className='container'>
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
            <div className='player-wrapper'>
              {this.state.links.map(url => (
                <ReactPlayer
                playing
                url={url}
                />
              ))}
            </div>
      </div>
    );
  }
}








export default UsersPage;

