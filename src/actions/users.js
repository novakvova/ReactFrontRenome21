import usersService from "../services/users.service";
import { GET_USERS } from "./types";


export const getUsers = () => async (dispatch) => {
    try {
        const res = await usersService.get_list();
        dispatch({
            type: GET_USERS,
            data: res.data
        });
    } catch(err) {
        console.log(err);
    }
}