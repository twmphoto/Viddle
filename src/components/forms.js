class Form extends Component{
state = {
    firstName:'',
    lastName:'',
    userName:'',
    password:''
    }
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

onPasswordChange = e =>{
    this.setState({
        password: e.target.value

    })
}

render(){
    return(
        <div>Sign Up</div>
        <form onSubmit = {this.onSubmit>
            <div className="form-group">
                <label>First Name</label>
                <input type = "text" className = "form-control" onChange=
        {this.onFirstNameChange} value ={this.state.firstName} placeholder ="Enter first name" />
            </div>
            <div className="form-group">
            <label>last Name</label>
            <input type = "text" className = "form-control" onChange=
    {this.onLastNameChange} value ={this.state.lastName} placeholder ="Enter last name" />
            </div>
            <div className="form-group">
            <label>First Name</label>
            <input type = "text" className = "form-control" onChange=
    {this.onUsernameChange} value ={this.state.u serName} placeholder ="Enter first name" />
            </div>
                
            
            
            
            
            </form>



    )

}
