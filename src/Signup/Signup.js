import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        word: 'Pleace, Register',
    }

}

HandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
}

HandleSubmit = (event) => {
    event.preventDefault();
axios({
    method: "POST",
    url: 'https://node--api.herokuapp.com/users/sign_up',
   data: 
    {
    'firstName': this.state.firstName,
    'lastName': this.state.lastName,
    'email': this.state.email,
    'username': this.state.username,
    'password': this.state.password,
}

})
.then(function (response) {
    alert('Thank you for regisration');
  })
  .catch(function (error) {
    alert('Try again');
  });
}

  render () {
    return (
            <div className="signup-container">
                <h1>{this.state.word}</h1>
                <form onSubmit={this.HandleSubmit}>
                <div>
                    <label>firstname </label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.HandleChange}/>
                </div>
                <div>
                    <label>Lastname</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.HandleChange}/>
                </div>
                <div>
                    <label>username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.HandleChange}/>
                </div>
                <div>
                    <label>E-mail </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.HandleChange}/>
                </div>
                <div>
                    <label>password </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.HandleChange} />  
                </div>
                <div>
                    <input type="submit" value='Sign In' />
                </div>
                </form>
            </div>
        );
  }
}

export default Signup;