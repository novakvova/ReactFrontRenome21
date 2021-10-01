import http from "../http-common";

class AccountService {
    register(data){
        return http.post("api/account/register", data);
    }
    login(data){
        return http.post("api/account/login", data);
    }
}

export default new AccountService();