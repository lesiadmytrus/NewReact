import React, {Component} from 'react';
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'Pleace, Sign In',
      username: '',
      password: '',
    }
  }

  HandleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  HandleSubmit = (event) => {
    event.preventDefault();
    axios({
        method: 'POST',
        url: 'https://node--api.herokuapp.com/users/sign_in',
        data: {
          'username': this.state.username,
          'password': this.state.password
        }
      }).then(function (response) {
      localStorage.setItem('token', response.data.token);
      console.log('you logged in');
    })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {
    return (
      <div className="signin-container">
        <h1>{this.state.word}</h1>
        <div className="col-md-6 col-md-offset-3">
          <form name="form" onSubmit={this.HandleSubmit}>
            <div className='form-group'>
              <label htmlFor="username">username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.HandleChange}/>
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.HandleChange}/>
              <br/>
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Sign In"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;