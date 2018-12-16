
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionCreator';
import {bindActionCreators} from 'redux';
import axios from 'axios';

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e){
        this.setState({
            todotext: e.target.value
        })
        axios(
            {
                method: "POST",
                url: 'https://node--api.herokuapp.com/todos',
                headers: {
                    'token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                  },
                  data: {
                      title: this.state.todotext
                  }    
            })
            // .then(function (response) {
            //     debugger
            //    this.INITIAL_DATA = response.data.data
            //   })
            //   .catch(function (error) {
            //     alert('Try again');
            //   });
        
    }

    render(){
        return (
           <div className="form-group row">
              <div className="col-sm-10">
                 <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control" id="inputEmail3" placeholder="add todo here"/>
                   <button type="button" onClick={ () => this.setState({ todotext: '' }) } style={{marginTop: "25px", marginRight: "15px"}} className="btn btn-danger">Cancel</button>
                   <button type="button" onClick={() =>{ this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) } } style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
              </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)