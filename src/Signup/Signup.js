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
        method: 'POST',
        url:    'https://node--api.herokuapp.com/users/sign_up',
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
                <div className="col-md-6 col-md-offset-3">
                <form name='form' onSubmit={this.HandleSubmit}>
                <div className='form-group'>
                    <label htmlFor='firstname'>firstname </label>
                    <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.HandleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='lastname'>Lastname</label>
                    <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.HandleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='username'>username</label>
                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.HandleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>E-mail </label>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.HandleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>password </label>
                    <input type="password" className="form-control" name="password" placeholder='password' value={this.state.password} onChange={this.HandleChange} />  
                </div>
                <div className='form-group'>
                    <input type="submit" className="btn btn-primary" value='Sign In' />
                </div>
                </form>
                </div>
            </div>
        );
  }
}

export default Signup;