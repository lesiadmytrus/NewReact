import React, { Component } from 'react';
import CreateTodo from './container/createTodo';
import Table from './container/table';
import MainLayout from "./Layout/Main";
import SigninContainer from "./Signin";
import {PATHS} from "./route";
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SignupContainer from './Signup';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
            <Table />
          </div>
        </div>
        <BrowserRouter>
        <div>
          <MainLayout>
            {/* <Switch>  */}
               {/* <Route exact path={PATHS.INDEX} component={ HomeContainer }/>   */}
               <Route exact path={PATHS.SIGNIN} component={ SigninContainer }/>  
               <Route exact path={PATHS.SIGNUP} component={ SignupContainer }/>  
             {/* </Switch> */}
           </MainLayout>
        </div>
      </BrowserRouter>
      </div>
    );
}
  }

export default App;
