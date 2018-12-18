import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/actionsType';
import axios from 'axios';

class initialData {
    constructor(){
        this.INITIAL_DATA = [];
        this.setvalue();
    }

    setvalue = () => {
        const iam = this; 
        axios(
            {
                method: "GET",
                url: 'https://node--api.herokuapp.com/todos',
                headers: {
                    'token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                  }    
            })
            .then((response) => {
               iam.INITIAL_DATA = response.data.data
              })
              .catch(function (error) {
                // alert('Try again');
              });
    }

    getValue = () => {
        return this.INITIAL_DATA;
    }
}

const INITIAL_DATA = new initialData().getValue()
const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_TODO:
        return [
            ...state,{
                id: action.id,
                text: action.text,
                completed: false,
            }
        ]
        case TOGGLE_TODO:
        return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
         )
        case REMOVE_TODO:
        const numIndex = parseInt(action.id)
        return state.filter(todo => todo.id !== numIndex);
        default:
        return state
    }
}

export default TodoReducer;