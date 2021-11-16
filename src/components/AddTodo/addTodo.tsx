import React, { useState } from "react";

import { connect } from "react-redux";
import { doAddTodo } from "../../redux/todo/todo-actions";

type addTodoProps = PropsFromRedux & {};

const AddTodo: React.FC = (props: addTodoProps) => {
    const [input, setInput] = useState<string>("");

    const handleInput = (e: { target: HTMLInputElement }) => {
        setInput(e.target.value);
    };

    const { doAddTodo } = props;

    return (
        <div className="add-todo">
            <input onChange={handleInput} />
            <button
                className="add-todo-button"
                onClick={() => doAddTodo(input)}
            >
                Add new todo item
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    doAddTodo,
};

const connector = connect(null, mapDispatchToProps);

export default connector(AddTodo);
