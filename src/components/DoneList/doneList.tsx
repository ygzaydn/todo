import React from "react";

import { connect } from "react-redux";
import { stateCheckedTodo } from "../../redux/todo/todo-selectors";
import DoneElement from "../DoneElement/doneElement";

import "./doneList.scss";

type doneListProps = PropsFromRedux & {};

const DoneList: React.FC = (props: doneListProps) => {
    const { checked } = props;
    return (
        <div className="done-list-container">
            <div className="done-list-title">
                <h5>Done List</h5>
            </div>
            <ul className="done-items">
                {checked.length ? (
                    checked.map((checkedItem: todoType) => (
                        <DoneElement checkedItem={checkedItem} />
                    ))
                ) : (
                    <h6>There is no item </h6>
                )}
            </ul>
        </div>
    );
};

const mapStateToProps = (state: stateType) => ({
    checked: stateCheckedTodo(state),
});

const connector = connect(mapStateToProps);

export default connector(DoneList);
