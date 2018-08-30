import React, { Component } from 'react';
// import user_navbar from './user_navbar';
// import user_sortbar from'./user_sortbar';
// import user_content from './user_content';
import ReactPlayer from 'react-player';





class UsersPage extends Component {
  state = {
    newurl:[],  
    urls: [],

  }


  NewUrlLink = url =>{
    let newLink = [...this.state.urls, url]
    this.setState({
      urls: newLink
    })
  }







  render() {
    return (
      <div className='container'>
        {this.state.urls.map(url => <ReactPlayer url={url} />)}
        {/* <form 
        >
          <div className='form-group'>
            <label for="userUrl">Paste the URL below</label>
            <input type="url" value={this.state.urls} className="form-control" id='userUrl' placeholder='URL' />
          </div>
          <button type='submit' className="btn btn-dark">Submit</button>
        </form> */}
      </div>
    );
  }
}








export default UsersPage;
