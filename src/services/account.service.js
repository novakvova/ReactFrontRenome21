import http from "../http-common";

class AccountService {
    register(data){
        return http.post("api/account/register", data);
    }
}

export default new AccountService();