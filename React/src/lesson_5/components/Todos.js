import React, {useState} from "react";
import { addtodo, removetodo } from "../redux/actions";
import { UseSelector, useDispatch } from "react-redux";

export default function Todo(){

    // const todos = useSelector(state => state.todos.todos);

    const dispatch = useDispatch();

    return(
        <>
            <h1>Things To Do</h1>
            <button onClick={()=> dispatch(addtodo())}>Add Task</button>
            <button onClick={()=> dispatch(removetodo())}>Remove Task</button>
            {/* <input type="text"  onBlur={(e) => {dispatch(setName(e.target.value))}}/> */}
        </>
    )
}

    
