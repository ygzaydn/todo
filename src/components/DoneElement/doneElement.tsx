import React from "react";

import { connect } from "react-redux";

import { doUncheckTodo, doDeleteTodo } from "../../redux/todo/todo-actions";

import "./doneElement.scss";

type doneElementProps = PropsFromRedux & {
    checkedItem: todoType;
};

const DoneElement: React.FC<doneElementProps> = (props: doneElementProps) => {
    const {
        doUncheckTodo,
        doDeleteTodo,
        checkedItem: { id, task },
    } = props;
    return (
        <li className="done-item" key={id}>
            <h6 className="todo-item-task">{task}</h6>
            <button
                className="done-item-delete"
                onClick={() => doDeleteTodo(props.checkedItem)}
            >
                Delete
            </button>
            <button
                className="done-item-uncheck"
                onClick={() => doUncheckTodo(props.checkedItem)}
            >
                Mark as unchecked
            </button>
        </li>
    );
};

const mapDispatchToProps = {
    doUncheckTodo,
    doDeleteTodo,
};

const connector = connect(null, mapDispatchToProps);

export default connector(DoneElement);
