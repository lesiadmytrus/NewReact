import React, { Component } from 'react';
import CreateTodo from './container/createTodo';
import Table from './container/table';
import MainLayout from "./Layout/Main";
import SigninContainer from "./Signin";
import {PATHS} from "./route";
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './App.css';
import SignupContainer from './Signup';
import Logout from './Logout/Logout';
import TodoContainer from './container/createTodo';
// import PrivateRoute from './PrivateRoute/PrivateRoute';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthentificated: localStorage.getItem('auth'),
    }
  }
  render() {
    return (
      <div className="App">
        {/* <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <Table />
          </div>
        </div> */}
        <BrowserRouter>
        <div>
          <MainLayout>
            <Switch> 
               {/* <Route exact path={PATHS.INDEX} component={ TodoContainer}/>   */}
               <Route exact path={PATHS.SIGNIN} component={ SigninContainer }/>  
               <Route exact path={PATHS.SIGNUP} component={ SignupContainer }/>  
               <Route path={PATHS.LOGOUT}/> 
               <PrivateRoute state={this.state} path={PATHS.INDEX} component={ TodoContainer} />
             </Switch>
           </MainLayout>
        </div>
      </BrowserRouter>
      </div>
    );

    function PrivateRoute({state, path, component}) {
      console.log(path);
      if (localStorage.getItem('token')) {
        return <Route exact path={path} component={component}/>
      } else {
        return <Redirect exact to={{pathname: '/signin', state: {referrer: path}
        }}/>
      }
    }
}
}

export default App;
