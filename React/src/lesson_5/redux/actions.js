import { REMOVETODO, ADDTODO } from "./actionTypes";

export const addtodo=(task)=>({
    type: ADDTODO,
    payload: task
});

export const removetodo=(task)=>({
    type: REMOVETODO,
    payload: task
});