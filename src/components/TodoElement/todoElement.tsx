import React from "react";

import { connect, ConnectedProps } from "react-redux";
import { doCheckTodo, doDeleteTodo } from "../../redux/todo/todo-actions";

import "./todoElement.scss";

type PropsFromRedux = ConnectedProps<typeof connector>;

type todoElementProps = PropsFromRedux & {
    todoItem: todoType;
};

const TodoElement: React.FC<todoElementProps> = (props: todoElementProps) => {
    const {
        todoItem: { id, task },
        doDeleteTodo,
        doCheckTodo,
    } = props;
    return (
        <div className="todo-item" key={id}>
            <h6 className="todo-item-task">{task}</h6>
            <div className="todo-item-button-container">
                <button
                    className="todo-item-delete"
                    onClick={() => doDeleteTodo(props.todoItem)}
                >
                    Delete
                </button>
                <button
                    className="todo-item-check"
                    onClick={() => doCheckTodo(props.todoItem)}
                >
                    Mark as checked
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    doDeleteTodo,
    doCheckTodo,
};

const connector = connect(null, mapDispatchToProps);

export default connector(TodoElement);
