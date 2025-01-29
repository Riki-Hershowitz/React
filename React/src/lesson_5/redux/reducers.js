import { REMOVETODO, ADDTODO } from "./actionTypes";

const initialState={
    todos: [],
};

export const addAndRemoveReducer=(state = initialState, action)=>{
    switch(action.type){
        case ADDTODO:
            return {...state, todos: state.todos.concat(action.payload)};
        case REMOVETODO: 
            return {...state, todos: state.todos.filter((todo)=> todo.id != action.payload.id)}; 
        default:
            return state;   
    }
};