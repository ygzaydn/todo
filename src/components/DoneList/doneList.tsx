import React from "react";

import { connect } from "react-redux";
import { stateCheckedTodo } from "../../redux/todo/todo-selectors";
import DoneElement from "../DoneElement/doneElement";

type doneListProps = PropsFromRedux & {};

const DoneList: React.FC = (props: doneListProps) => {
    const { checked } = props;
    return (
        <div>
            {checked.map((checkedItem: todoType) => (
                <DoneElement checkedItem={checkedItem} />
            ))}
        </div>
    );
};

const mapStateToProps = (state: stateType) => ({
    checked: stateCheckedTodo(state),
});

const connector = connect(mapStateToProps);

export default connector(DoneList);
