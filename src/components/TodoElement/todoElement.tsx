import React from "react";

import { connect, ConnectedProps } from "react-redux";
import { doCheckTodo, doDeleteTodo } from "../../redux/todo/todo-actions";

type PropsFromRedux = ConnectedProps<typeof connector>;

type todoElementProps = PropsFromRedux & {
    todoItem: todoType;
};

const TodoElement: React.FC<todoElementProps> = (props: todoElementProps) => {
    console.log(props);
    const {
        todoItem: { id, task },
        doDeleteTodo,
        doCheckTodo,
    } = props;
    return (
        <div className="todo-item" key={id}>
            <span className="todo-item-id">ID: {id} </span>
            <span className="todo-item-task">TASK: {task} </span>
            <button
                className="todo-item-check"
                onClick={() => doCheckTodo(props.todoItem)}
            >
                Mark as checked
            </button>
            <button
                className="todo-item-delete"
                onClick={() => doDeleteTodo(props.todoItem)}
            >
                Delete
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    doDeleteTodo,
    doCheckTodo,
};

const connector = connect(null, mapDispatchToProps);

export default connector(TodoElement);