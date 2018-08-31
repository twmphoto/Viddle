import React, { Component } from 'react';
import user_content from './user_content';
import ReactPlayer from 'react-player';





class UsersPage extends Component {
  state = {
    // newlinks:[],  
    links: [],
    urls:'',
    isValid: false

  }


  NewUrlLink = links =>{
    let newLink = [...this.state.links, links]
    this.setState({
      links: newLink
    })
  }

  onUrlChange = e => {
    this.setState({
      urls: e.target.value
    })
  }


  formSubmit = e => {
    e.preventDefault();

    // object { email, username, password }
    this.NewUrlLink(this.state.urls),
    this.setState({
      urls:''
    });
   }





  render() {
    return (
      <div className='container'>
              <div className='page-header'>
                <h1>This is our user page</h1>
              </div>   
        <form onSubmit={this.formSubmit}>
          <div className='form-group'>
            <label for="userUrl">Paste the URL below</label>
            <input type="url" value={this.state.urls} onChange={this.onUrlChange} className="form-control" id='userUrl' placeholder='URL' />
          </div>
          <button type='submit' className="btn btn-dark">Submit</button>
        </form>
        <div>
        

        </div>
      </div>
    );
  }
}








export default UsersPage;

