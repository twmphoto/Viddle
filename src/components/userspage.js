import React, { Component } from 'react';
import { LOGIN, HOME, NEWUSERS } from '../constants/constants';
import ReactPlayer from 'react-player';
import { version } from '../../package.json'








class UsersPage extends Component {
  state = {
    // newlinks:[],  
    links: ['https://youtu.be/GxSRZFHqsf4',
    'https://www.youtube.com/watch?v=GI_LAIt9zis',
    'https://youtu.be/QDjci1ODoBs',
    'https://youtu.be/kDOZGqsTCgw',
    'https://www.youtube.com/watch?v=yhavtVpEW2E&list=PL7u4lWXQ3wfJTTpL9rKvp9AFQNqKj_YSz',
    "https://www.twitch.tv/videos/303641243",
    'https://soundcloud.com/jahseh-onfroy/hope',
    'https://www.dailymotion.com/video/x5hou0n',
  ],
    url: '',
    isValid: false,
    loaded: 0

  }


  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
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
          <div className='col-md react-player'>
            <div className='row'>
              {this.state.links.map(url => (
                <ReactPlayer
                  url={url}
                  width='210px'
                  height= '148px'

                />
              ))}
              </div>
            </div>
        </div>
    );
      }
    }
    
    
    
    
    
    
    
    
    export default UsersPage;
    
