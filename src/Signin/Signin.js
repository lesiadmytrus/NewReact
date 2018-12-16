import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
        word: 'Pleace, Sign In',
        username: '',
        password: '',
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
console.log('i am handlesubmit');
// fetch('https://node--api.herokuapp.com/users/sign_in',
// {
//     method: "POST",
//     headers: {
//        'Content-Type': 'application/json',
//    },
//    body: 
//     JSON.stringify({
//     'username': this.state.username,
//     'password': this.state.password,})

// })

axios(
{
    method: "POST",
    url: 'https://node--api.herokuapp.com/users/sign_in',
   data: 
    {
    'username': this.state.username,
    'password': this.state.password,
    }
})
.then(function (response) {
    localStorage.setItem('token', response.data.token);
    console.log('you logged in');
  })
  .catch(function (error) {
    console.log(error);
  });
}
  render () {
    return (
            <div className="signin-container">
                <h1>{this.state.word}</h1>
                <form onSubmit={this.HandleSubmit}>
                <div>
                    <label>username </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.HandleChange}/>
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

export default Signin;