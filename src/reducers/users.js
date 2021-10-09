import { GET_USERS } from "../actions/types";

const initialState = {
    list: []
};

function usersReducer(users = initialState, action) {
    const {type, data} = action;
    switch(type){
        case GET_USERS: {
            return {
                list: data
            }
            
        }
        default: 
            return users;
    }
}

export default usersReducer;