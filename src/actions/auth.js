import jwt from "jsonwebtoken";
import { REGISTER_AUTH } from "./types";


export const authUser = (token, dispatch) => {
    var user = jwt.decode(token);
    console.log("user auth: ", user);
    dispatch({type: REGISTER_AUTH, data: user});
}