import { InputActionTypes } from "./todo-types";

interface stateType {
    todo: { id: number; task: string; done: boolean }[];
}

type payloadType = string | number;
type actionType = {
    type: string;
    payload: payloadType;
};

const INITIAL_STATE: stateType = {
    todo: [],
};

const addTodo = (state: stateType, payload: payloadType) => ({
    id: state.todo.length + 1,
    task: payload,
    done: false,
});

const toggleTodo = (state: stateType, payload: payloadType) =>
    state.todo.map((el) => (el.id === payload ? { ...el, done: el.done } : el));

const deleteTodo = (state: stateType, payload: payloadType) =>
    state.todo.filter((el) => el.id !== payload);

const todoReducer = (state = INITIAL_STATE, action: actionType) => {
    switch (action.type) {
        case InputActionTypes.ADD_TODO:
            return {
                ...state,
                todo: addTodo(state, action.payload),
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
