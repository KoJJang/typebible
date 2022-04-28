export const ADD = "ACCOUNT/ADD";

export const addAccount = account => ({
    type: ADD,
    account
});

const initialState = {
    name: ''
};

export default function account (state=initialState, action){
    switch(action.type){
        case ADD:
            return {
                ...state,
                account: action.account
            };

        default:
            return state;
    }
};
