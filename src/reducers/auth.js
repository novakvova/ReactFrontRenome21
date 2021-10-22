import { REGISTER_AUTH, LOGIN_AUTH, LOGOUT } from "../actions/types";

const initialState = {
    isAuth: false, 
    username: ""
};

function authReducer(auth = initialState, action) {
    const {type, data} = action;
    //console.log("reducer data", data);
    switch(type){
        case REGISTER_AUTH:
        case LOGIN_AUTH: {
            return {
                isAuth: true,
                username: data.name
            }
            
        }
        case LOGOUT: {
            return { 
                isAuth: false
            }
        }
        default: 
            return auth;
    }
}

export default authReducer;