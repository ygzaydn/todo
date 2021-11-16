//redux types

interface todoType {
    id: string;
    task: string;
    done: boolean;
}

interface stateType {
    todo: todoType[];
}

interface actionType {
    type: string;
    payload: todoType;
}

type dispatchType = (args: actionType) => actionType;

type PropsFromRedux = ConnectedProps<typeof connector>;
