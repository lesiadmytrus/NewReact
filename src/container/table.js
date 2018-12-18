import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo,  setVisibilityFilter } from "../actions/actionCreator";
import { SHOW_ALL} from "../actions/actionsType";
import { bindActionCreators } from "redux";

class Table extends Component {
  render() {
    return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
        {this.props.todos.length !== 0 ? (
          <table
            style={{ marginTop: "60px" }}
            className="table table-hover "
          >
            <thead>
              <tr>
                <th scope="col">Todos</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todos.map(todo => (
                <tr key={todo.id}>
                  <td
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.text} {todo.completed === true ? "(completed)" : ""}
                  </td>
                  <td>
                    <span
                      className="fas fa-minus-circle"
                      onClick={() => this.props.deleteTodo(todo.id)}
                      style={{
                        color: "gray",
                        fontSize: "20pt",
                        marginRight: "20px"
                      }}
                    />
                    <span
                      className="fas fa-check-circle"
                      onClick={() => this.props.toggleTodo(todo.id)}
                      style={{ color: "gray", fontSize: "20pt" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{ marginTop: "50px" }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
          >
            <div className="alert alert-danger" role="alert">
              Todo List is empty
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
