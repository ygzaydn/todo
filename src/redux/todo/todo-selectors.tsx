export const stateUncheckedTodo = (state: stateType) =>
    state.todo.filter((el) => el.done === false);

export const stateCheckedTodo = (state: stateType) =>
    state.todo.filter((el) => el.done === true);
