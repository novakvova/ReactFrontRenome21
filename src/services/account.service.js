import http from "../http-common";

class AccountService {
    register(data){
        return http.post("api/account/register", data);
    }
    login(data){
        return http
            .post("api/account/login", data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    }
}

export default new AccountService();