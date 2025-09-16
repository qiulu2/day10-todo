import axios from "axios";
import {message} from "antd";

 const api = axios.create({
    baseURL: 'https://68c7ac295d8d9f51473284f1.mockapi.io/1',
    headers: {'content-type': 'application/json'},
    timeout: 10000,
});

api.interceptors.response.use(
    (response) => {
        // handle response
        console.log(response);
        return response;
    },
    (error) => {
        // handle response error
        const {status, data} = error.response;
        if (status === 404) {
            console.log(status,data);
            message.error(error.message,10000);
            // do something
        }
        return Promise.reject(error);
    }
);


export {api};