import React, { Component } from 'react';

import ReactPlayer from 'react-player';




class UsersContent extends Component {
  state = {
    pastedUrl: '',
  }


  NewUrlLink = url =>{
    let newLink = [...this.state.urls, url]
    this.setState({
      urls: newLink
    })
  }

  linkSubmit = e => {
      e.preventDefault();

  }





  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" value={this.state.name} onChange={this.onNameChange} className="form-control" placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <label>Your Photo</label>
          <input value={this.state.picture} onChange={this.onPicChange} className="form-control" placeholder="Enter Picture" />
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}








export default UsersContent;
