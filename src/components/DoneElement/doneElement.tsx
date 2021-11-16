import React from "react";

import { connect } from "react-redux";

import { doUncheckTodo, doDeleteTodo } from "../../redux/todo/todo-actions";

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
        <div className="done-item" key={id}>
            <span className="done-item-id">ID: {id} </span>
            <span className="done-item-task">TASK: {task} </span>
            <button
                className="done-item-uncheck"
                onClick={() => doUncheckTodo(props.checkedItem)}
            >
                Mark as unchecked
            </button>
            <button
                className="done-item-delete"
                onClick={() => doDeleteTodo(props.checkedItem)}
            >
                Delete
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    doUncheckTodo,
    doDeleteTodo,
};

const connector = connect(null, mapDispatchToProps);

export default connector(DoneElement);
