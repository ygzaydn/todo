import React from "react";

import { connect } from "react-redux";
import { stateUncheckedTodo } from "../../redux/todo/todo-selectors";
import TodoElement from "../TodoElement/todoElement";

import "./todoList.scss";

type todoListProps = PropsFromRedux & {};

const TodoList: React.FC<todoListProps> = (props: todoListProps) => {
    const { todo } = props;
    return (
        <div className="todo-list-container">
            <div className="todo-list-title">
                <h5>Todo List</h5>
            </div>
            <div className="todo-items">
                {todo.length ? (
                    todo.map(
                        (todoElement: todoType): JSX.Element => (
                            <TodoElement
                                todoItem={todoElement}
                                key={todoElement.id}
                            />
                        )
                    )
                ) : (
                    <h6>There is no item</h6>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state: stateType) => ({
    todo: stateUncheckedTodo(state),
});

const connector = connect(mapStateToProps);

export default connector(TodoList);
