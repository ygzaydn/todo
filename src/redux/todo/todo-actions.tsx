import { InputActionTypes } from "./todo-types";

export const doAddTodo = (todo: string) => ({
    type: InputActionTypes.ADD_TODO,
    payload: { task: todo },
});

export const doCheckTodo = (todo: todoType) => ({
    type: InputActionTypes.CHECK_TODO,
    payload: todo,
});

export const doUncheckTodo = (todo: todoType) => ({
    type: InputActionTypes.UNCHECK_TODO,
    payload: todo,
});

export const doDeleteTodo = (todo: todoType) => ({
    type: InputActionTypes.DELETE_TODO,
    payload: todo,
});
