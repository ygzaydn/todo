import React from "react";

import { connect } from "react-redux";
import { stateUncheckedTodo } from "../../redux/todo/todo-selectors";
import TodoElement from "../TodoElement/todoElement";

type todoListProps = PropsFromRedux & {};

const TodoList: React.FC<todoListProps> = (props: todoListProps) => {
    console.log(props);
    const { todo } = props;
    return (
        <div className="todo-items">
            {todo.map(
                (todoElement: todoType): JSX.Element => (
                    <TodoElement todoItem={todoElement} />
                )
            )}
        </div>
    );
};

const mapStateToProps = (state: stateType) => ({
    todo: stateUncheckedTodo(state),
});

const connector = connect(mapStateToProps);

export default connector(TodoList);
