import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:41849/",
    // baseURL: "http://localhost:5000/",
     //baseURL: "http://producttest.tk/",
    headers: {
        "Content-type": "application/json"
    }
});