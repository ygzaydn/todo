import { InputActionTypes } from "./todo-types";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE: stateType = {
    todo: [],
};

const addTodo = (payload: todoType): todoType => ({
    id: uuidv4(),
    task: payload.task,
    done: false,
});

const toggleTodo = (state: stateType, payload: todoType): todoType[] =>
    state.todo.map((el) =>
        el.id === payload.id ? { ...el, done: !el.done } : el
    );

const deleteTodo = (state: stateType, payload: todoType): todoType[] =>
    state.todo.filter((el) => el.id !== payload.id);

const todoReducer = (
    state: stateType = INITIAL_STATE,
    action: actionType
): stateType => {
    switch (action.type) {
        case InputActionTypes.ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, addTodo(action.payload)],
            };
        case InputActionTypes.CHECK_TODO:
        case InputActionTypes.UNCHECK_TODO:
            return {
                ...state,
                todo: toggleTodo(state, action.payload),
            };
        case InputActionTypes.DELETE_TODO:
            return {
                ...state,
                todo: deleteTodo(state, action.payload),
            };

        default:
            return state;
    }
};

export default todoReducer;
